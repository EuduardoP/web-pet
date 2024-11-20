import type { Result } from "@/app/membros/types"
import { Client } from "@notionhq/client"

interface Member {
	id: string
	properties: {
		name: string
		status: string
		image: string
		lattes: string | null
		linkedin: string | null
		startDate: string | null
	}
}

export async function getMembersData(): Promise<Member[]> {
	if (!process.env.NOTION_API_KEY) {
		throw new Error("NOTION_API_KEY is not defined")
	}

	const notion = new Client({
		auth: process.env.NOTION_API_KEY,
	})

	const databaseId = process.env.NOTION_MEMBERS_DATABASE_ID
	if (!databaseId) {
		throw new Error("NOTION_MEMBERS_DATABASE_ID is not defined")
	}

	try {
		const response = await notion.databases.query({
			database_id: databaseId,
		})
		const formatData = (data: Result[]): Member[] => {
			return data.map((item) => {
				const { id, properties } = item

				return {
					id,
					properties: {
						name: properties.Name?.title[0]?.plain_text || "N/A",
						status: properties.Status?.select?.name || "N/A",
						lattes: properties.Lattes?.files?.[0]?.external?.url || null,
						linkedin: properties.Linkedin?.files?.[0]?.external?.url || null,
						startDate: properties["Data de entrada "]?.date?.start || null,
						image: properties.Foto?.files?.[0]?.file?.url || "",
					},
				}
			})
		}
		// Formatar os dados recebidos
		const formattedResults = formatData(response.results as unknown as Result[])

		return formattedResults
	} catch (error) {
		throw new Error(`Failed to query Notion database: ${error}`)
	}
}
