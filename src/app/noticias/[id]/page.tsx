import { Button } from "@/components/ui/button"
import { calculateTimeDifference } from "@/function/calculate-time-difference"
import { getBlockNewsData } from "@/lib/get-block-news-data"
import { getNewsData } from "@/lib/get-news-data"
import { getUserData } from "@/lib/get-user-data"
import { Dot, FileText } from "lucide-react"
import Link from "next/link"

export default async function Noticia({
	params,
}: {
	params: Promise<{ id: string }>
}) {
	const newsId = (await params).id
	const blockData = await getBlockNewsData(newsId)
	const newsData = await getNewsData()
	const user = await getUserData(blockData?.created_by ?? "")
	return (
		<div className="flex flex-col w-full p-4">
			<header>
				<img
					alt="Imagem da notícia"
					src={newsData.find((item) => item.id === newsId)?.cover}
					className="w-full h-64 rounded-xl object-cover mb-4"
				/>
				<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-1">
					{blockData?.title}
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
						{blockData?.created_time &&
							new Date(blockData.created_time).toLocaleDateString("pt-BR", {
								day: "numeric",
								month: "numeric",
								year: "numeric",
							})}
					</p>
					<Dot />
					<p>
						Atualizado{" "}
						{calculateTimeDifference(blockData?.last_edited_time ?? "")}
					</p>
				</small>
			</header>
			<main className="flex flex-col gap-10">
				{blockData?.result.map((block) => {
					const richText =
						block.type === "paragraph" ||
						block.type === "heading_1" ||
						block.type === "heading_2" ||
						block.type === "heading_3" ||
						block.type === "bulleted_list_item" ||
						block.type === "callout"
							? (block[block.type]?.rich_text?.[0]?.plain_text ?? "")
							: ""

					return (
						<div key={block.id}>
							{block.type === "paragraph" && richText && (
								<p className="leading-7 [&:not(:first-child)]:mt-6">
									{richText}
								</p>
							)}
							{block.type === "heading_1" && richText && (
								<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl first:mt-0 mt-4">
									{richText}
								</h1>
							)}
							{block.type === "heading_2" && richText && (
								<h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mt-4">
									{richText}
								</h2>
							)}
							{block.type === "heading_3" && richText && (
								<h3 className="scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0 mt-4">
									{richText}
								</h3>
							)}
							{block.type === "bulleted_list_item" && richText && (
								<ul className="my-2 list-disc [&>li]:mt-2">
									<li>{richText}</li>
								</ul>
							)}
							{block.type === "callout" && richText && (
								<blockquote className="m-6 border-l-4 italic">
									{richText}
								</blockquote>
							)}
							{block.type === "image" && block.image?.file?.url && (
								<img
									src={block.image.file.url}
									alt={
										block.image.caption[0]?.plain_text || "Imagem sem descrição"
									}
									className="rounded-xl object-cover mb-4 size-min"
								/>
							)}
							{block.type === "file" && block.file?.file?.url && (
								<div className="border-l-4">
									<Button variant="link" asChild>
										<Link href={block.file.file.url}>
											<FileText />
											{block.file.name}
										</Link>
									</Button>
								</div>
							)}
						</div>
					)
				})}{" "}
			</main>
		</div>
	)
}
