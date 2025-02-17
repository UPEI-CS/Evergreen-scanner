import { writeFileSync } from "fs";
import path from "path";
import { createContext, runInContext, RunningScriptOptions } from "vm";
import dotenv from "dotenv";
dotenv.config();

interface IdlClassDef {
  fields: IdlFieldDef[];
  field_map: { [key: string]: IdlFieldDef };
  classname: string;
  pkey?: string;
}

interface IdlFieldDef {
  name: string;
  datatype: string;
  required?: boolean;
  virtual?: boolean;
  class?: string;
  type?: "link";
  label?: string;
}

function generateTypeDefinitions(idlData: {
  [key: string]: IdlClassDef;
}): string {
  let output = "";

  
  output += `
/**
* Base interface for all Fieldmapper objects
*/
export interface IdlObject {
  a: any[];
  classname: string;
  _isfieldmapper: boolean;
}

`;

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
  const baseUrl = process.env.EG_BASE_URL;
  if (!baseUrl) {
    throw new Error("EG_BASE_URL environment variable is not set");
  }

  const response = await fetch(`${baseUrl}/IDL2js`);
  if (!response.ok) {
    throw new Error(`Failed to fetch IDL script: ${response.statusText}`);
  }

  const js = await response.text();
  const idlData = evalIDLScript(js);

  const typeDefinitions = generateTypeDefinitions(idlData);

  writeFileSync(
    path.join(__dirname, "../types/generated/idl-definitions.json"),
    JSON.stringify(idlData, null, 2)
  );
  
  writeFileSync(
    path.join(__dirname, "../types/generated/idl-types.ts"),
    typeDefinitions
  );
}

main();
