import { writeFileSync } from "fs";
import path from "path";
import { createContext, runInContext, RunningScriptOptions } from "vm";
import fs from "fs";
import dotenv from 'dotenv';

dotenv.config();

export interface IdlFieldDef {
  name: string;
  datatype: string;
  required?: boolean;
  virtual?: boolean;
  class?: string;
  type?: "link";
  label?: string;
}

export interface IdlClassDef {
  fields: IdlFieldDef[];
  field_map: { [key: string]: IdlFieldDef };
  classname: string;
  pkey?: string;
  label?: string;
}

export interface IdlClasses {
  [className: string]: IdlClassDef;
}

/**
 * Base interface for all Fieldmapper objects
 */
export interface IdlObject {
  a: any[];
  classname: string;
  _isfieldmapper: boolean;
}

/**
 * Mapping of IDL class names to their corresponding interfaces
 */
export interface IdlClassMapping {
  [className: string]: IdlObject;
}


function generateTypeDefinitions(idlData: IdlClasses): string {
  let output = "";

  output += `export interface IdlObject {
  a: any[];
  classname: string;
  _isfieldmapper: boolean;
}\n\n`;

  for (const [className, classDef] of Object.entries(idlData)) {
    const interfaceName = className.toUpperCase();

    output += `export interface ${interfaceName} extends IdlObject {\n`;

    for (const field of classDef.fields) {
      // Skip fields that are properties of IdlObject
      if (field.name === "classname") continue;

      // Skip virtual internal fields
      if (
        field.virtual &&
        ["isnew", "ischanged", "isdeleted"].includes(field.name)
      ) {
        continue;
      }

      const type = getTypeForField(field);

      output += `    ${field.name}(): ${type};\n`;
      output += `    ${field.name}(value: ${type}): void;\n`;
    }

    output += "}\n\n";
  }
  output += "/**\n";
  output += " * Mapping of IDL class names to their corresponding interfaces\n";
  output += " */\n";
  output += "export interface IdlClassMapping {\n";
  for (const [className, classDef] of Object.entries(idlData)) {
    output += `  /** ${classDef.label ? ` ${classDef.label}` : ''} */\n`;
    output += `  "${className}": ${className.toUpperCase()};\n`;
  }
  output += "}\n\n";

  // Add IdlClassName type
  output += "/**\n";
  output += " * Valid IDL class names\n";
  output += " */\n";
  output += "export type IdlClassName = keyof IdlClassMapping;\n";

  return output;
}

function getTypeForField(field: IdlFieldDef): string {
  if (field.type === "link") {
    return (field.class && `${field.class.toUpperCase()} | null`) || "any";
  }

  switch (field.datatype) {
    case "id":
    case "int":
    case "float":
    case "money":
      return "number | null";
    case "bool":
      return "boolean | null";
    case "timestamp":
      return "string | null";
    case "org_unit":
      return "number | null";
    case "text":
      return "string | null";
    default:
      return "any";
  }
}

function evalIDLScript(js: string) {
  const context = createContext({
    console: {
      log: () => {},
    },
  });

  const vmOptions: RunningScriptOptions = {
    timeout: 5000,
    displayErrors: true,
  };

  try {
    runInContext(js, context, vmOptions);

    if (typeof (context as any)._preload_fieldmapper_IDL === "undefined") {
      throw new Error("IDL data not found in evaluated script");
    }

    return (context as any)._preload_fieldmapper_IDL;
  } catch (error) {
    throw new Error(`Failed to evaluate IDL script: ${error}`);
  }
}

async function main() {
  console.log("📥 Fetching IDL script...");
  
  const baseUrl = process.argv[2] || process.env.EG_URL;
  if (!baseUrl) {
    throw new Error("Evergreen URL must be provided either as a command line argument or EG_URL environment variable");
  }

  const response = await fetch(`${baseUrl}/IDL2js`);
  if (!response.ok) {
    throw new Error(`Failed to fetch IDL script: ${response.statusText}`);
  }

  const js = await response.text();
  console.log("⚙️ Processing IDL data...");
  const idlData = evalIDLScript(js);

  console.log("📝 Generating type definitions...");
  const typeDefinitions = generateTypeDefinitions(idlData);

  const generatedTypesDir = path.join(__dirname, "../types/generated");
  
  console.log("📁 Creating output directory...");
  try {
    await fs.promises.mkdir(generatedTypesDir, { recursive: true });
  } catch (error) {
    console.error("Error creating directory:", error);
    throw error;
  }

  console.log("💾 Writing output files...");
  writeFileSync(
    path.join(generatedTypesDir, "idl-definitions.json"),
    JSON.stringify(idlData, null, 2)
  );
  
  writeFileSync(
    path.join(generatedTypesDir, "idl-types.ts"),
    typeDefinitions
  );

  console.log("✅ Type generation complete!");
}

main().catch(error => {
  console.error("Error:", error);
  process.exit(1);
});
