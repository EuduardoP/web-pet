import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getProjectsData } from "@/lib/get-projects-data"
import { BookText, Search, Users } from "lucide-react"
import ProjectsList from "./projectsList"

const category = [
	{
		icon: BookText,
		name: "Ensino",
		description:
			"Foca em complementar a formação dos alunos por meio de atividades pedagógicas, como minicursos e projetos práticos.",
	},
	{
		icon: Users,
		name: "Extensão",
		description:
			"Busca levar o conhecimento acadêmico à comunidade externa, promovendo o desenvolvimento social e tecnológico.",
	},
	{
		icon: Search,
		name: "Pesquisa",
		description:
			"Desenvolve projetos para avançar no conhecimento científico e tecnológico, com foco em soluções para a área de engenharia elétrica.",
	},
]

export default async function Page() {
	const projects = await getProjectsData()

	return (
		<div className="flex flex-col gap-4 p-2">
			<header>
				<h2 className="scroll-m-20 pb-2 border-b text-3xl font-semibold tracking-tight first:mt-0">
					O que o PET realiza?
				</h2>
				<p className="mt-4 text-justify">
					O PET-EE (Programa de Educação Tutorial em Engenharia Elétrica) da
					UFSM se organiza em três principais categorias de desenvolvimento:
					ensino, extensão e pesquisa. Cada uma delas desempenha um papel
					fundamental no fortalecimento da formação acadêmica e na integração da
					universidade com a comunidade.
				</p>
			</header>
			<main className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4">
				{category.map((item) => (
					<Card key={item.name}>
						<CardHeader className="flex flex-col justify-center items-center">
							<div className="bg-muted rounded-full size-24 flex justify-center items-center">
								<item.icon size={40} />
							</div>
							<CardTitle>{item.name}</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-justify">{item.description}</p>
						</CardContent>
					</Card>
				))}
			</main>
			<h2 className="scroll-m-20 pb-2 border-b text-3xl font-semibold tracking-tight first:mt-0">
				Projetos do PET
			</h2>
			<ProjectsList projects={projects} />
		</div>
	)
}
