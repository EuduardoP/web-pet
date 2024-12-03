import { Button } from "@/components/ui/button"
import { getNewsData } from "@/lib/get-news-data"
import { ListFilter } from "lucide-react"
import { NewsData } from "./newsData"

export default async function Noticias() {
	const news = await getNewsData()
	return (
		<div className="flex flex-col w-full">
			<h2 className="flex scroll-m-20 pb-2 border-b text-3xl font-semibold tracking-tight first:mt-0 justify-between">
				<p>Notícias</p>
				<Button variant="ghost" className="ml-2" size="icon">
					<ListFilter />
				</Button>
			</h2>
			<NewsData data={news} />
		</div>
	)
}
