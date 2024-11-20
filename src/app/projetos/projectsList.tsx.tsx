"use client"

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { useSearchParams } from "next/navigation"

interface Project {
	id: string
	properties: {
		title: string
		tipo: string
		descricao: string
		lider: string
	}
}

interface ProjectsListProps {
	projects: Project[]
}

export default function ProjectsList({ projects }: ProjectsListProps) {
	const searchParams = useSearchParams()
	console.log(projects[6].properties.tipo)

	const selectedCategory = searchParams.get("tipo") || ""

	const handleCategoryChange = (category: string) => {
		const params = new URLSearchParams(searchParams.toString())
		if (category) {
			params.set("tipo", category)
		} else {
			params.delete("tipo")
		}
		window.history.replaceState(null, "", `?${params.toString()}`)
	}

	const filteredProjects =
		selectedCategory === ""
			? projects
			: projects.filter(
					(project) =>
						project.properties.tipo.toLowerCase().trim() ===
						selectedCategory.toLowerCase().trim(),
				)

	return (
		<div className="flex flex-col gap-4">
			<h2 className="scroll-m-20 pb-2 border-b text-3xl font-semibold tracking-tight first:mt-0">
				Projetos do PET
			</h2>
			<ToggleGroup
				type="single"
				value={selectedCategory}
				onValueChange={(value) => handleCategoryChange(value || "")}
			>
				<ToggleGroupItem value="ensino">Ensino</ToggleGroupItem>
				<ToggleGroupItem value="extensão">Extensão</ToggleGroupItem>
				<ToggleGroupItem value="pesquisa">Pesquisa</ToggleGroupItem>
			</ToggleGroup>

			<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4">
				{filteredProjects.map((project) => (
					<Card key={project.id}>
						<CardHeader>
							<CardTitle>{project.properties.title}</CardTitle>
							<CardDescription>{project.properties.tipo}</CardDescription>
						</CardHeader>
						<CardContent>
							<p>{project.properties.descricao}</p>
						</CardContent>
						<CardFooter>
							<p>
								Liderado por{" "}
								{project.properties.lider
									.split(" ")
									.map(
										(word) =>
											word.charAt(0).toUpperCase() +
											word.slice(1).toLowerCase(),
									)
									.join(" ")}
							</p>
						</CardFooter>
					</Card>
				))}
			</div>
		</div>
	)
}
