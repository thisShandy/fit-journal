import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());

    // if (!data.phone || !data.flow_id || !data.geo) {
    //   return NextResponse.json(
    //     { error: "Missing required fields" },
    //     { status: 400 }
    //   );
    // }

    const clientIp = request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown";

    data.ip = clientIp.split(',')[0].trim();

    const queryParams = new URLSearchParams();
    for (const [key, value] of Object.entries(data)) {
      if (value) queryParams.append(key, value.toString());
    }

    const metacpaUrl = `https://metacpa.ru/create?${queryParams.toString()}`;

    console.log("metacpaUrl", metacpaUrl);

    const response = await fetch(metacpaUrl);
    const result = await response.text();

    return NextResponse.json({ success: true, result });

  } catch (error) {
    console.error("Meta CPA submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}