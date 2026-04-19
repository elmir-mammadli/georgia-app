import { NextRequest, NextResponse } from "next/server";

const STRAPI_URL =
  process.env.STRAPI_URL ||
  process.env.NEXT_PUBLIC_STRAPI_URL ||
  "http://localhost:1337";
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.name || !body.email) {
      return NextResponse.json(
        { message: "Name and email are required" },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return NextResponse.json(
        { message: "Invalid email address" },
        { status: 400 }
      );
    }

    const headers: HeadersInit = {
      "Content-Type": "application/json",
    };

    if (STRAPI_TOKEN) {
      headers["Authorization"] = `Bearer ${STRAPI_TOKEN}`;
    }

    const strapiRes = await fetch(`${STRAPI_URL}/api/form-submissions`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        data: {
          name: body.name,
          email: body.email,
          company: body.company || "",
          message: body.message || "",
          source: "website-contact",
        },
      }),
    });

    if (!strapiRes.ok) {
      console.error("Strapi submission failed:", await strapiRes.text());
      return NextResponse.json(
        { message: "Failed to submit form" },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
