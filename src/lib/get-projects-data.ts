import type { Result } from "@/app/projetos/types"
import { Client } from "@notionhq/client"

interface Project {
	id: string
	properties: {
		title: string
		descricao: string
		lider: string
		tipo: string
	}
}

export async function getProjectsData() {
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
		const response = await notion.databases.query({
			database_id: databaseId,
			filter: {
				property: "Tipo",
				multi_select: {
					does_not_contain: "Outros",
				},
			},
		})
		const formatData = (data: Result[]): Project[] => {
			return data.map((item) => {
				const { id, properties } = item

				return {
					id,
					properties: {
						title: properties.Name.title[0]?.plain_text || "",
						lider: properties.Lider.people[0]?.name || "",
						descricao: properties["Descrição "].rich_text[0]?.plain_text || "",
						tipo: properties.Tipo.multi_select[0]?.name || "",
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
