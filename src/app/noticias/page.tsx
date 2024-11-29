import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { calculateTimeDifference } from "@/function/calculate-time-difference"
import { getNewsData } from "@/lib/get-news-data"
import { Dot, ListFilter } from "lucide-react"
import Link from "next/link"

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
			<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 mt-4">
				{news
					? news.map((item) => (
							<Link href={`/noticias/${item.id}`} key={item.id} passHref>
								<Card
									key={item.id}
									className="transition-transform hover:scale-105"
								>
									{item.cover ? (
										<img
											src={item.cover}
											alt="Imagem da notícia"
											className="bg-muted rounded-t-xl w-full h-40 object-cover"
										/>
									) : (
										<div className="bg-muted rounded-t-xl w-full h-40 object-cover" />
									)}
									<CardHeader>
										<CardTitle>{item.properties.title}</CardTitle>
										<CardDescription className="space-y-2">
											<div className="flex gap-2 items-center">
												<p>
													{new Date(item.created_time).toLocaleDateString(
														"pt-BR",
														{
															day: "numeric",
															month: "numeric",
															year: "numeric",
														},
													)}
												</p>
												<Dot />
												<p>
													Atualizado{" "}
													{calculateTimeDifference(item.last_edited_time)}
												</p>
											</div>
											<div className="flex gap-2">
												{item.properties.tags.map((tag) => (
													<Badge key={tag} variant="outline">
														{tag}
													</Badge>
												))}
											</div>
										</CardDescription>
									</CardHeader>
									<CardContent>{item.properties.resumo}</CardContent>
									<CardFooter>Autor: {item.properties.author}</CardFooter>
								</Card>
							</Link>
						))
					: null}
			</div>
		</div>
	)
}
