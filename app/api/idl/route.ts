import { createContext, runInContext, RunningScriptOptions } from "vm";
import { NextResponse, NextRequest } from "next/server";
import { HttpTranslator } from "@/lib/eg-client/src/gateways/http-translator";
import { SessionRetrieveContent } from "@/lib/eg-client/src/types/auth";

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

export async function GET(request: NextRequest) {
  const authToken = request.cookies.get("EG_AUTH_TOKEN")?.value;

  //TODO: move session check to middleware later
  if (!authToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const baseUrl = process.env.EG_BASE_URL;
  if (!baseUrl) {
    return NextResponse.json(
      { error: "EG_BASE_URL is not set" },
      { status: 500 }
    );
  }
  const client = new HttpTranslator({
    baseUrl,
  });
  const [result] = await client.auth.session.retrieve({
    authToken,
  });
  const resultStatus = result.__p.payload.__p.status;

  if (resultStatus !== "OK") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const searchParams = request.nextUrl.searchParams;
    const classname = searchParams.get("class");
    const baseUrl = process.env.EG_BASE_URL;
    if (!baseUrl) {
      throw new Error("EG_BASE_URL is not set ");
    }
    const response = await fetch(`${baseUrl}/IDL2js`, {
      next: { revalidate: 60 * 60 },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch IDL data");
    }

    const js = await response.text();
    const idl = evalIDLScript(js);

    if (!classname) {
      return NextResponse.json(idl);
    }

    const classData = idl[classname];
    if (!classData) {
      return NextResponse.json(
        { error: `Class '${classname}' not found` },
        { status: 404 }
      );
    }

    return NextResponse.json(classData);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to load IDL data" },
      { status: 500 }
    );
  }
}
