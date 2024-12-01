import { getNewsData } from "@/lib/get-news-data"
import { NextResponse } from "next/server"

export async function GET() {
	try {
		const news = await getNewsData()
		return NextResponse.json(news)
	} catch (error) {
		return NextResponse.json({ error: "Failed to fetch news" }, { status: 500 })
	}
}
