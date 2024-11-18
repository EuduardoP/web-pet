import Image from "next/image"

export default function Page() {
	return (
		<>
			<main className="px-2">
				<h2 className="scroll-m-20 pb-2 border-b text-3xl font-semibold tracking-tight first:mt-0">
					Sobre o PET
				</h2>
				<div>
					<p className="text-justify my-4">
						O Programa de Educação Tutorial é um programa do Ministério da
						Educação, desenvolvido por grupos de estudantes, com tutoria de um
						docente, organizados a partir de formações em nível de graduação nas
						Instituições de Ensino Superior do País orientados pelo princípio da
						indissociabilidade entre ensino, pesquisa e extensão e da educação
						tutorial. O grupo PET Engenharia Elétrica foi criado em 1995 e é
						composto de 12 alunos bolsistas, 6 alunos não-bolsistas e um
						professor tutor.
					</p>
				</div>
				<Image
					src="/all.jpg"
					alt="Todos os membros do PET"
					width={1840}
					height={1035}
				/>
			</main>
		</>
	)
}
