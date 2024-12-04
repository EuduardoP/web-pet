export default function Home() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] min-h-screen sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-8 row-start-1 items-start">
				<div>
					<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
						Bem Vindo ao PET-EE
					</h1>
				</div>
				<div>
					<h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
						Notícias Recentes
					</h2>
					<ul>
						<li>Notícia 1</li>
						<li>Notícia 2</li>
						<li>Notícia 3</li>
					</ul>
				</div>
			</main>
		</div>
	)
}
