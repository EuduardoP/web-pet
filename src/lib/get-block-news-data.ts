import { Client } from "@notionhq/client"

export async function getBlockNewsData(blockId: string) {
	if (!process.env.NOTION_API_KEY) {
		throw new Error("NOTION_API_KEY is not defined")
	}
	const notion = new Client({ auth: process.env.NOTION_API_KEY })
	try {
		const response = await notion.blocks.retrieve({
			block_id: blockId,
		})
		const children = await notion.blocks.children.list({
			block_id: blockId,
		})
		const result = children.results
		const title = response.child_page.title
		const last_edited_time = response.last_edited_time
		const created_by = response.created_by.id
		const created_time = response.created_time
		return { title, result, last_edited_time, created_by, created_time }
	} catch (error) {
		console.error("Error appending block:", error)
	}
}
