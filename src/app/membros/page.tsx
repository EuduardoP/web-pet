import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip"
import { getMembersData } from "@/lib/get-members-data"
import { File, Linkedin } from "lucide-react"
import Link from "next/link"
import { MemberImage } from "./memberImage"

export default async function Page() {
	const members = await getMembersData()
	return (
		<div>
			<h2 className="scroll-m-20 pb-2 border-b text-3xl font-semibold tracking-tight first:mt-0">
				Membros do PET
			</h2>
			<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 mt-4">
				{members
					.sort((a, b) => {
						if (
							a.properties.status === "Tutor" &&
							b.properties.status !== "Tutor"
						) {
							return -1
						}
						if (
							a.properties.status !== "Tutor" &&
							b.properties.status === "Tutor"
						) {
							return 1
						}
						return a.properties.name.localeCompare(b.properties.name)
					})
					.map((member) => (
						<Card
							key={member.properties.id}
							className="transition-transform hover:scale-105 h-auto w-64"
						>
							<CardHeader
								className={
									"flex flex-col items-center data-[have-image]:p-0 justify-center"
								}
								data-have-image={member.properties.image ? "true" : undefined}
							>
								<MemberImage
									imageUrl={member.properties.image}
									name={member.properties.name}
								/>
								<Separator />
								<CardTitle>{member.properties.name}</CardTitle>
							</CardHeader>
							<CardContent className="flex flex-col gap-2">
								<p>{member.properties.status}</p>
								<TooltipProvider>
									<div className="flex gap-2">
										{member.properties.lattes && (
											<Tooltip>
												<TooltipTrigger asChild>
													<Button asChild variant="outline" size="icon">
														<Link
															href={member.properties.lattes}
															target="_blank"
															rel="noopener noreferrer"
														>
															<File />
														</Link>
													</Button>
												</TooltipTrigger>
												<TooltipContent>
													<p>Lattes</p>
												</TooltipContent>
											</Tooltip>
										)}
										{member.properties.linkedin && (
											<Tooltip>
												<TooltipTrigger asChild>
													<Button asChild variant="outline" size="icon">
														<Link
															href={member.properties.linkedin}
															target="_blank"
															rel="noopener noreferrer"
														>
															<Linkedin />
														</Link>
													</Button>
												</TooltipTrigger>
												<TooltipContent>
													<p>LinkedIn</p>
												</TooltipContent>
											</Tooltip>
										)}
									</div>
								</TooltipProvider>
								{member.properties.startDate && (
									<p>
										Entrou em:{" "}
										{new Date(member.properties.startDate).toLocaleDateString(
											"pt-BR",
											{
												day: "2-digit",
												month: "2-digit",
												year: "numeric",
											},
										)}
									</p>
								)}
							</CardContent>
						</Card>
					))}
			</div>
		</div>
	)
}
