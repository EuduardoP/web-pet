"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import type { News } from "@/lib/get-news-data"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"

interface FilterPanelProps {
	isOpen: boolean
	news: News[]
}

export function FilterPanel({ isOpen, news }: FilterPanelProps) {
	const router = useRouter()
	const pathname = usePathname()
	const searchParams = useSearchParams()

	const [author, setAuthor] = useState(searchParams.get("author") || "")
	const [selectedTags, setSelectedTags] = useState<string[]>(() => {
		const tagParam = searchParams.get("tags")
		return tagParam ? tagParam.split(",") : []
	})

	// Update state when URL changes
	useEffect(() => {
		setAuthor(searchParams.get("author") || "")

		const tagParam = searchParams.get("tags")
		setSelectedTags(tagParam ? tagParam.split(",") : [])
	}, [searchParams])

	// Extract unique tags from all news items
	const allTags = news
		.reduce<string[]>((tags, item) => {
			for (const tag of item.properties.tags) {
				if (!tags.includes(tag)) {
					tags.push(tag)
				}
			}
			return tags
		}, [])
		.sort()

	const handleFilter = () => {
		const params = new URLSearchParams(searchParams.toString())

		if (author) {
			params.set("author", author)
		} else {
			params.delete("author")
		}

		if (selectedTags.length > 0) {
			params.set("tags", selectedTags.join(","))
		} else {
			params.delete("tags")
		}

		router.push(`${pathname}?${params.toString()}`)
	}

	const clearFilters = () => {
		setAuthor("")
		setSelectedTags([])
		router.push(pathname)
	}

	const handleTagValueChange = (value: string[]) => {
		setSelectedTags(value)
	}

	return (
		<div
			className={`bg-card border rounded-md shadow-md overflow-hidden transition-all duration-300 ease-in-out transform ${
				isOpen
					? "max-h-96 opacity-100 translate-y-0 my-4"
					: "max-h-0 opacity-0 -translate-y-4 pointer-events-none my-0"
			}`}
		>
			<div className="p-4 space-y-4">
				<div>
					<h3 className="font-medium mb-2">Filtrar por autor</h3>
					<Input
						placeholder="Nome do autor"
						value={author}
						onChange={(e) => setAuthor(e.target.value)}
						className="w-full"
					/>
				</div>

				<Separator />

				<div>
					<h3 className="font-medium mb-2">Filtrar por tag(s)</h3>
					{allTags.length > 0 ? (
						<ToggleGroup
							type="multiple"
							className="flex flex-wrap justify-start"
							value={selectedTags}
							onValueChange={handleTagValueChange}
						>
							{allTags.map((tag) => (
								<ToggleGroupItem key={tag} value={tag} className="mb-1">
									{tag}
								</ToggleGroupItem>
							))}
						</ToggleGroup>
					) : (
						<p className="text-sm text-muted-foreground">
							Nenhuma tag disponível nas notícias
						</p>
					)}
				</div>

				<div className="flex justify-between pt-2">
					<Button variant="outline" size="sm" onClick={clearFilters}>
						Limpar filtros
					</Button>
					<Button size="sm" onClick={handleFilter}>
						Aplicar filtros
					</Button>
				</div>
			</div>
		</div>
	)
}

