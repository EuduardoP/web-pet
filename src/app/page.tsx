"use client"

import { Badge } from "@/components/ui/badge"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"
import { Skeleton } from "@/components/ui/skeleton"
import type { News } from "@/lib/get-news-data"
import { useQuery } from "@tanstack/react-query"
import Link from "next/link"

export default function Home() {
	const { data: newsData, isLoading } = useQuery({
		queryKey: ["NewsData"],
		queryFn: async () => {
			const response = await fetch("/api/news")
			if (!response.ok) throw new Error("Failed to fetch members")
			if (response.ok) console.log("News fetched successfully")
			return response.json()
		},
		staleTime: 1 * 60 * 60 * 1000, // 1 horas
	})

	const recentNews: News[] | undefined = newsData?.slice(0, 5)
	return (
		<div className="grid grid-rows-[20px_1fr_20px] min-h-screen sm:p-20 font-[family-name:var(--font-geist-sans)] w-full">
			<main className="flex flex-col gap-8 row-start-1 items-start">
				<div>
					<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
						Bem Vindo ao PET-EE
					</h1>
				</div>
				<div className="w-full">
					<h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
						Notícias Recentes
					</h2>
					<Carousel
						opts={{
							align: "start",
						}}
						className="w-full mt-4"
					>
						<CarouselContent>
							{isLoading ? (
								<>
									{[1, 2, 3].map((index) => (
										<CarouselItem
											key={index}
											className="md:basis-1/2 lg:basis-1/3"
										>
											<div className="p-1">
												<Card>
													<Skeleton className="rounded-t-xl w-full h-40" />
													<CardHeader>
														<Skeleton className="h-6 rounded w-3/4" />
														<CardDescription className="space-y-2">
															<Skeleton className="h-4 rounded w-1/4" />
															<div className="flex gap-2">
																<Skeleton className="h-5 rounded w-16" />
																<Skeleton className="h-5 rounded w-16" />
															</div>
														</CardDescription>
													</CardHeader>
													<CardContent>
														<Skeleton className="h-20 rounded" />
													</CardContent>
													<CardFooter>
														<Skeleton className="h-4 rounded w-1/3" />
													</CardFooter>
												</Card>
											</div>
										</CarouselItem>
									))}
								</>
							) : (
								recentNews?.map((news) => (
									<CarouselItem
										key={news.id}
										className="md:basis-1/2 lg:basis-1/3"
									>
										<div className="p-3">
											<Link href={`/noticias/${news.id}`} passHref>
												<Card className="transition-transform hover:scale-105">
													{news.cover ? (
														<img
															src={news.cover}
															alt="Imagem da notícia"
															className="bg-muted rounded-t-xl w-full h-40 object-cover"
														/>
													) : (
														<div className="bg-muted rounded-t-xl w-full h-40 object-cover" />
													)}
													<CardHeader>
														<CardTitle>{news.properties.title}</CardTitle>
														<CardDescription className="space-y-2">
															<div className="flex gap-2 items-center">
																<p>
																	{new Date(
																		news.created_time,
																	).toLocaleDateString("pt-BR", {
																		day: "numeric",
																		month: "numeric",
																		year: "numeric",
																	})}
																</p>
															</div>
															<div className="flex gap-2">
																{news.properties.tags.map((tag) => (
																	<Badge key={tag} variant="outline">
																		{tag}
																	</Badge>
																))}
															</div>
														</CardDescription>
													</CardHeader>
													<CardContent>{news.properties.resumo}</CardContent>
													<CardFooter>
														Autor:{" "}
														{news.properties.author
															?.split(" ")
															.map((word: string) => {
																if (
																	["de", "da", "do"].includes(
																		word.toLowerCase(),
																	)
																) {
																	return word.toLowerCase()
																}
																return (
																	word.charAt(0).toUpperCase() +
																	word.slice(1).toLowerCase()
																)
															})
															.join(" ")}
													</CardFooter>
												</Card>
											</Link>
										</div>
									</CarouselItem>
								))
							)}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</div>
			</main>
		</div>
	)
}
