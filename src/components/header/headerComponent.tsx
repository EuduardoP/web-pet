import Image from "next/image"
import Link from "next/link"
import { ModeToggle } from "../theme-provider/modeToggle"
import { Button } from "../ui/button"
import { Menu } from "lucide-react"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu"

export default function HeaderComponent() {
	return (
		<header className="sticky top-0 z-50 flex items-center gap-6 p-4 justify-between h-full w-full border-b border-zinc-400 bg-teal-300/30 backdrop-blur-sm">
			<Image
				aria-hidden
				src="/logo.png"
				alt="File icon"
				width={150}
				height={150}
			/>
			<div className="flex items-center gap-6">
				<div className="flex items-center md:hidden">
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="ghost" size="icon">
								<Menu className="w-6 h-6" />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent className="flex flex-col gap-4">
							<Button variant="link" asChild>
								<Link href="/">Início</Link>
							</Button>
							<Button variant="link" asChild>
								<Link href="/sobre">O que é o PET?</Link>
							</Button>
							<Button variant="link" asChild>
								<Link href="/membros">Membros</Link>
							</Button>
							<Button variant="link" asChild>
								<Link href="/projetos">Projetos</Link>
							</Button>
						</DropdownMenuContent>
					</DropdownMenu>
					<ModeToggle />
				</div>

				<nav className="hidden md:flex gap-6">
					<Button variant="link" asChild>
						<Link href="/">Início</Link>
					</Button>
					<Button variant="link" asChild>
						<Link href="/sobre">O que é o PET?</Link>
					</Button>
					<Button variant="link" asChild>
						<Link href="/membros">Membros</Link>
					</Button>
					<Button variant="link" asChild>
						<Link href="/projetos">Projetos</Link>
					</Button>
				</nav>

				<div className="hidden md:block">
					<ModeToggle />
				</div>
			</div>
		</header>
	)
}
