import { Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ModeToggle } from "../theme-provider/modeToggle"
import { Button } from "../ui/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu"

export default function HeaderComponent() {
	const navBar = [
		{
			name: "Início",
			href: "/",
		},
		{
			name: "Notícias",
			href: "/noticias",
		},
		{
			name: "O que é o PET?",
			href: "/sobre",
		},
		{
			name: "Membros",
			href: "/membros",
		},
		{
			name: "Projetos",
			href: "/projetos",
		},
		{
			name: "Quero participar do PET",
			href: "https://petee-selecao.vercel.app/",
			external: true,
		},
	]
	return (
		<header className="sticky top-0 z-50 flex items-center gap-6 p-4 justify-between h-full w-full border-b border-zinc-400 bg-teal-300/30 backdrop-blur-sm">
			<Link href="/">
				<Image
					aria-hidden
					src="/logo.png"
					alt="File icon"
					width={150}
					height={150}
				/>
			</Link>
			<div className="flex items-center gap-6">
				<div className="flex items-center lg:hidden">
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="ghost" size="icon">
								<Menu className="w-6 h-6" />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent className="flex flex-col gap-4">
							{navBar.map((item) => (
								<Button variant="link" asChild key={item.name}>
									<Link href={item.href}>{item.name}</Link>
								</Button>
							))}
						</DropdownMenuContent>
					</DropdownMenu>
					<ModeToggle />
				</div>

				<nav className="hidden lg:flex gap-6">
					{navBar.map((item) =>
						item.external ? (
							<Button variant="link" asChild key={item.name}>
								<Link href={item.href} target="_blank">
									{item.name}
								</Link>
							</Button>
						) : (
							<Button variant="link" asChild key={item.name}>
								<Link href={item.href}>{item.name}</Link>
							</Button>
						),
					)}
				</nav>

				<div className="hidden lg:block">
					<ModeToggle />
				</div>
			</div>
		</header>
	)
}
