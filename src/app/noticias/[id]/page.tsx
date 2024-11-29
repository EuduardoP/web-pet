import { calculateTimeDifference } from "@/function/calculate-time-difference"
import { getBlockNewsData } from "@/lib/get-block-news-data"
import { getNewsData } from "@/lib/get-news-data"
import { getUserData } from "@/lib/get-user-data"
import { Dot } from "lucide-react"

export default async function Noticia({
	params,
}: {
	params: Promise<{ id: string }>
}) {
	const newsId = (await params).id
	const newsData = await getBlockNewsData(newsId)
	const newssData = await getNewsData()
	const user = await getUserData(newsData?.created_by ?? "")
	return (
		<div className="flex flex-col w-full p-4">
			<header>
				<img
					alt="Imagem da notícia"
					src={newssData.find((item) => item.id === newsId)?.cover}
					className="w-full h-64 rounded-xl object-cover mb-4"
				/>
				<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-1">
					{newsData?.title}
				</h1>
				<small className="flex items-center text-muted-foreground gap-2 text-sm font-medium leading-none mb-10 mr-2">
					<p>
						{user?.name
							?.split(" ")
							.map((word: string) => {
								if (["de", "da", "do"].includes(word.toLowerCase())) {
									return word.toLowerCase()
								}
								return (
									word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
								)
							})
							.join(" ")}
					</p>

					<p>
						{newsData?.created_time &&
							new Date(newsData.created_time).toLocaleDateString("pt-BR", {
								day: "numeric",
								month: "numeric",
								year: "numeric",
							})}
					</p>
					<Dot />
					<p>
						Atualizado{" "}
						{calculateTimeDifference(newsData?.last_edited_time ?? "")}
					</p>
				</small>
			</header>
			<main>
				{newsData?.result.map((block) => (
					<div key={block.id}>
						{block.type === "paragraph" && block.paragraph && (
							<p className="leading-7 [&:not(:first-child)]:mt-6">
								{block.paragraph.rich_text[0].plain_text}
							</p>
						)}
						{block.type === "heading_1" && block.heading_1 && (
							<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl first:mt-0 mt-4">
								{block.heading_1.rich_text[0].plain_text}
							</h1>
						)}
						{block.type === "heading_2" && block.heading_2 && (
							<h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mt-4">
								{block.heading_2.rich_text[0].plain_text}
							</h2>
						)}
						{block.type === "heading_3" && block.heading_3 && (
							<h3 className="scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0 mt-4">
								{block.heading_3.rich_text[0].plain_text}
							</h3>
						)}
						{block.type === "bulleted_list_item" &&
							block.bulleted_list_item && (
								<ul className="my-6 ml-6 list-disc [&>li]:mt-2">
									<li>{block.bulleted_list_item.rich_text[0].plain_text}</li>
								</ul>
							)}
						{block.type === "callout" && block.callout && (
							<blockquote className="m-6 border-l-2 pl-6 italic">
								{block.callout.rich_text[0].plain_text}
							</blockquote>
						)}
					</div>
				))}
			</main>
		</div>
	)
}
