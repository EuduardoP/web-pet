import type { Result } from "@/app/projetos/types"
import { Client } from "@notionhq/client"

export async function getUserData(userId: string) {
	if (!process.env.NOTION_API_KEY) {
		throw new Error("NOTION_API_KEY is not defined")
	}

	const notion = new Client({
		auth: process.env.NOTION_API_KEY,
	})

	const databaseId = process.env.NOTION_PROJECTS_DATABASE_ID
	if (!databaseId) {
		throw new Error("NOTION_PROJECTS_DATABASE_ID is not defined")
	}

	try {
		const response = await notion.users.retrieve({
			user_id: userId,
		})
		return response
	} catch (error) {
		throw new Error(`Failed to query Notion database: ${error}`)
	}
}
