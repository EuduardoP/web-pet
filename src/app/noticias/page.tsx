import { getNewsData } from "@/lib/get-news-data"
import { NoticiasClient } from "./noticiasClient"
import { Suspense } from "react"

export default async function NoticiasPage() {
	const news = await getNewsData()
	return (
		<Suspense fallback={<div className="w-full p-8 text-center">Carregando...</div>}>
			<NoticiasClient news={news} />
		</Suspense>
	)
}