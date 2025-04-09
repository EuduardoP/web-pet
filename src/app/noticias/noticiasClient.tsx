"use client"

import { Button } from "@/components/ui/button"
import { ListFilter } from "lucide-react"
import { useState } from "react"
import { NewsData } from "./newsData"
import type { News } from "@/lib/get-news-data"
import { FilterPanel } from "./filterPanel"
import { useSearchParams } from "next/navigation"

interface NoticiasClientProps {
	news: News[]
}

export function NoticiasClient({ news }: NoticiasClientProps) {
	const [isFilterOpen, setIsFilterOpen] = useState(false)
	const searchParams = useSearchParams()

	// Check if any filter is active
	const isFilterActive = searchParams.has("author") || searchParams.has("tags")

	const toggleFilter = () => {
		setIsFilterOpen((prev) => !prev)
	}

	return (
		<div className="flex flex-col w-full">
			<h2 className="flex scroll-m-20 pb-2 border-b text-3xl font-semibold tracking-tight first:mt-0 justify-between">
				<p>Notícias</p>
				<Button
					variant={isFilterActive ? "default" : "ghost"}
					size="icon"
					onClick={toggleFilter}
					className={isFilterActive ? "bg-primary text-primary-foreground" : ""}
				>
					<ListFilter />
				</Button>
			</h2>

			<FilterPanel isOpen={isFilterOpen} news={news} />

			<NewsData data={news} />
		</div>
	)
}

