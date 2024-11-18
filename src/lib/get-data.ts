import { Client } from "@notionhq/client"

export async function getMembersData() {
	const notion = new Client({
		auth: process.env.NOTION_API_KEY,
	})

	const databaseId = process.env.NOTION_DATABASE_ID
	if (!databaseId) {
		throw new Error("NOTION_DATABASE_ID is not defined")
	}

	const myPage = await notion.databases.query({
		database_id: databaseId,
	})

	return myPage
}
