import type { Result } from "@/app/noticias/types"
import { Client } from "@notionhq/client"

interface News {
	id: string
	created_time: string
	last_edited_time: string
	cover: string
	properties: {
		author: string
		title: string
		tags: Array<string>
		resumo: string
	}
}
export async function getNewsData() {
	if (!process.env.NOTION_API_KEY) {
		throw new Error("NOTION_API_KEY is not defined")
	}

	const notion = new Client({
		auth: process.env.NOTION_API_KEY,
	})

	const databaseId = process.env.NOTION_NEWS_DATABASE_ID
	if (!databaseId) {
		throw new Error("NOTION_NEWS_DATABASE_ID is not defined")
	}

	try {
		const response = await notion.databases.query({
			database_id: databaseId,
		})
		const formatData = (data: Result[]): News[] => {
			return data.map((item) => {
				const { id, cover, created_time, last_edited_time, properties } = item

				return {
					id,
					cover: cover?.external?.url || "",
					created_time,
					last_edited_time,
					properties: {
						author: properties.Autor.people[0]?.name || "",
						title: properties.Título.title[0]?.plain_text || "",
						tags: properties.Tags.multi_select.map((tag) => tag.name),
						resumo: properties.Resumo.rich_text[0]?.plain_text || "",
					},
				}
			})
		}
		const formattedResults = formatData(response.results as unknown as Result[])

		return formattedResults
	} catch (error) {
		throw new Error(`Failed to query Notion database: ${error}`)
	}
}
