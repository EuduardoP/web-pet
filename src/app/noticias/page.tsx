import { getNewsData } from "@/lib/get-news-data"
import { NoticiasClient } from "./noticiasClient"

export default async function NoticiasPage() {
	const news = await getNewsData()
	return <NoticiasClient news={news} />
}