import { Facebook, Instagram, Mail, MapPin, Youtube } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"

export default function FooterComponent() {
	return (
		<footer className="row-start-3 flex flex-col gap-6 p-2 px-10 flex-wrap items-center justify-center w-full">
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-32 w-full">
				<div className="w-full bg-red lg:order-2">
					<p>Rede sociais:</p>
					<div className="flex flex-row gap-4 w-full justify-start">
						<Button variant="outline" asChild>
							<Link
								href="https://www.instagram.com/petengenhariaeletrica/"
								target="_blank"
							>
								<Instagram />
							</Link>
						</Button>
						<Button variant="outline" asChild>
							<Link
								href="https://www.youtube.com/@petengenhariaeletricaufsm3158"
								target="_blank"
							>
								<Youtube />
							</Link>
						</Button>
						<Button variant="outline" asChild>
							<Link href="https://www.facebook.com/peteeufsm" target="_blank">
								<Facebook />
							</Link>
						</Button>
					</div>
				</div>

				<div className="flex flex-col gap-4 col-span-2 sm:order-1">
					<div className="flex gap-2">
						<Mail />
						<p>petengenhariaeletrica@ufsm.com</p>
					</div>
					<div className="flex gap-2">
						<MapPin />
						<p>
							Av. Roraima nº 1000 Cidade Universitária
							<br /> Bairro Camobi Santa Maria - RS
							<br /> CEP: 97105-900
							<br />
							Prédio:10 (CTLab) Sala:425
						</p>
					</div>
				</div>
			</div>

			<p className="text-xs text-center">
				© {new Date().getFullYear()} - PET Elétrica UFSM
			</p>
		</footer>
	)
}
