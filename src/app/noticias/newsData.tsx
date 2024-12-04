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
import { calculateTimeDifference } from "@/function/calculate-time-difference"
import type { News } from "@/lib/get-news-data"
import { useQuery } from "@tanstack/react-query"
import { Dot } from "lucide-react"
import Link from "next/link"

interface NewsDataProps {
	data: News[]
}

export function NewsData({ data: news }: NewsDataProps) {
	const { data }: { data: News[] } = useQuery({
		queryKey: ["NewsData"],
		queryFn: async () => {
			const response = await fetch("/api/news")
			if (!response.ok) throw new Error("Failed to fetch members")
			if (response.status === 200) {
				console.log("Notícias atualizados")
			}
			return response.json()
		},
		staleTime: 1 * 60 * 60 * 1000, // 1 horas
		initialData: news,
	})

	return (
		<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 mt-4">
			{data
				? data.map((item) => (
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
								<CardFooter>
									Autor:{" "}
									{item.properties.author
										?.split(" ")
										.map((word: string) => {
											if (["de", "da", "do"].includes(word.toLowerCase())) {
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
					))
				: null}
		</div>
	)
}
