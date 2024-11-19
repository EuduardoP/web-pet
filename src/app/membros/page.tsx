import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getMembersData } from "@/lib/get-data"
import { File, Linkedin } from "lucide-react"
import Link from "next/link"

export default async function Page() {
	const members = await getMembersData()
	return (
		<div>
			<h1>Membros do PET</h1>
			<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4">
				{members
					.sort((a, b) => a.properties.name.localeCompare(b.properties.name))
					.map((member) => (
						<Card key={member.id}>
							<CardHeader className="flex flex-col items-center">
								<Avatar key={member.id} className="w-24 h-24">
									<AvatarImage
										src={member.properties.image}
										alt={member.properties.name}
									/>
									<AvatarFallback>
										{member.properties.name
											.split(" ")
											.slice(0, 2)
											.map((word) => word.charAt(0).toUpperCase())
											.join("")}
									</AvatarFallback>
								</Avatar>
								<CardTitle>{member.properties.name}</CardTitle>
							</CardHeader>
							<CardContent>
								<p>{member.properties.status}</p>
								<div className="flex gap-2">
									{member.properties.lattes && (
										<Button asChild variant="outline" size="icon">
											<Link
												href={member.properties.lattes}
												target="_blank"
												rel="noopener noreferrer"
											>
												<File />
											</Link>
										</Button>
									)}
									{member.properties.linkedin && (
										<Button asChild variant="outline" size="icon">
											<Link
												href={member.properties.linkedin}
												target="_blank"
												rel="noopener noreferrer"
											>
												<Linkedin />
											</Link>
										</Button>
									)}
								</div>
							</CardContent>
						</Card>
					))}
			</div>
		</div>
	)
}
