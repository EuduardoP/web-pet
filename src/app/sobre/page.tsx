import Image from "next/image";

export default function Page() {
	return (
		<>
			<header>
				<Image
					src="https://placehold.co/1920x1080.png"
					alt="File icon"
					width={1920}
					height={1080}
				/>
			</header>
			<main>
				<div>
					<h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
						Sobre o PET
					</h2>

					<p className="text-justify mt-2">
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
			</main>
		</>
	);
}
