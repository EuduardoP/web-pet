import { getMembersData } from "@/lib/get-members-data"
import { NextResponse } from "next/server"

export async function GET() {
	try {
		const news = await getMembersData()
		return NextResponse.json(news)
	} catch {
		return NextResponse.json({ error: "Failed to fetch news" }, { status: 500 })
	}
}
