import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "../theme-provider/modeToggle";
import { Button } from "../ui/button";

export default function HeaderComponent() {
	return (
		<header className="sticky top-0 z-50 flex items-center gap-6 p-4 justify-between w-full border-b border-zinc-400 bg-teal-300/30 backdrop-blur-sm">
			<Image
				aria-hidden
				src="/logo.png"
				alt="File icon"
				width={150}
				height={150}
			/>
			<div className="flex gap-6 justify-center items-center">
				<Button variant="link" asChild>
					<Link href="/">Início</Link>
				</Button>
				<Button variant="link">
					<Link href="/sobre">O que é o PET?</Link>
				</Button>
				<Button variant="link">
					<Link href="/membros">Membros</Link>
				</Button>
				<Button variant="link">
					<Link href="/projetos">Projetos</Link>
				</Button>
				<ModeToggle />
			</div>
		</header>
	);
}
