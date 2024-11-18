// app/page.tsx ou onde estiver sua página (ajuste conforme o nome e caminho do arquivo)

import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AvatarFallback } from "@radix-ui/react-avatar"

export default async function Page() {
	//const members = await getMembersData()
	const members = [
		{
			id: "1",
			properties: {
				Nome: {
					type: "title",
					name: "John Doe",
				},
				Email: {
					type: "email",
					email: "john.doe@example.com",
				},
				Telefone: {
					type: "phone_number",
					phone_number: "+1234567890",
				},
				Função: {
					type: "select",
					select: {
						name: "Bolsista",
					},
				},
				Imagem: {
					type: "files",
					files: [
						{
							name: "profile.jpg",
							file: {
								url: "/user-placeholder.png",
							},
						},
					],
				},
			},
		},
		{
			id: "2",
			properties: {
				Nome: {
					type: "title",
					name: "Jane Smith",
				},
				Email: {
					type: "email",
					email: "jane.smith@example.com",
				},
				Telefone: {
					type: "phone_number",
					phone_number: "+9876543210",
				},
				Função: {
					type: "select",
					select: {
						name: "Voluntário",
					},
				},
				Imagem: {
					type: "files",
					files: [
						{
							name: "profile.jpg",
							file: {
								url: "/user-placeholder.png",
							},
						},
					],
				},
			},
		},
		{
			id: "3",
			properties: {
				Nome: {
					type: "title",
					name: "Bob Johnson",
				},
				Email: {
					type: "email",
					email: "bob.johnson@example.com",
				},
				Telefone: {
					type: "phone_number",
					phone_number: "+5555555555",
				},
				Função: {
					type: "select",
					select: {
						name: "Bolsista",
					},
				},
				Imagem: {
					type: "files",
					files: [
						{
							name: "profile.jpg",
							file: {
								url: "/user-placeholder.png",
							},
						},
					],
				},
			},
		},
		{
			id: "4",
			properties: {
				Nome: {
					type: "title",
					name: "Alice Brown",
				},
				Email: {
					type: "email",
					email: "alice.brown@example.com",
				},
				Telefone: {
					type: "phone_number",
					phone_number: "+1111111111",
				},
				Função: {
					type: "select",
					select: {
						name: "Voluntário",
					},
				},
				Imagem: {
					type: "files",
					files: [
						{
							name: "profile.jpg",
							file: {
								url: "/user-placeholder.png",
							},
						},
					],
				},
			},
		},
		{
			id: "5",
			properties: {
				Nome: {
					type: "title",
					name: "Charlie Wilson",
				},
				Email: {
					type: "email",
					email: "charlie.wilson@example.com",
				},
				Telefone: {
					type: "phone_number",
					phone_number: "+2222222222",
				},
				Função: {
					type: "select",
					select: {
						name: "Bolsista",
					},
				},
				Imagem: {
					type: "files",
					files: [
						{
							name: "profile.jpg",
							file: {
								url: "/user-placeholder.png",
							},
						},
					],
				},
			},
		},
		{
			id: "6",
			properties: {
				Nome: {
					type: "title",
					name: "Emma Davis",
				},
				Email: {
					type: "email",
					email: "emma.davis@example.com",
				},
				Telefone: {
					type: "phone_number",
					phone_number: "+3333333333",
				},
				Função: {
					type: "select",
					select: {
						name: "Voluntário",
					},
				},
				Imagem: {
					type: "files",
					files: [
						{
							name: "profile.jpg",
							file: {
								url: "/user-placeholder.png",
							},
						},
					],
				},
			},
		},
		{
			id: "7",
			properties: {
				Nome: {
					type: "title",
					name: "Frank Miller",
				},
				Email: {
					type: "email",
					email: "frank.miller@example.com",
				},
				Telefone: {
					type: "phone_number",
					phone_number: "+4444444444",
				},
				Função: {
					type: "select",
					select: {
						name: "Bolsista",
					},
				},
				Imagem: {
					type: "files",
					files: [
						{
							name: "profile.jpg",
							file: {
								url: "/user-placeholder.png",
							},
						},
					],
				},
			},
		},
		{
			id: "8",
			properties: {
				Nome: {
					type: "title",
					name: "Grace Taylor",
				},
				Email: {
					type: "email",
					email: "grace.taylor@example.com",
				},
				Telefone: {
					type: "phone_number",
					phone_number: "+6666666666",
				},
				Função: {
					type: "select",
					select: {
						name: "Voluntário",
					},
				},
				Imagem: {
					type: "files",
					files: [
						{
							name: "profile.jpg",
							file: {
								url: "/user-placeholder.png",
							},
						},
					],
				},
			},
		},
		{
			id: "9",
			properties: {
				Nome: {
					type: "title",
					name: "Henry Clark",
				},
				Email: {
					type: "email",
					email: "henry.clark@example.com",
				},
				Telefone: {
					type: "phone_number",
					phone_number: "+7777777777",
				},
				Função: {
					type: "select",
					select: {
						name: "Bolsista",
					},
				},
				Imagem: {
					type: "files",
					files: [
						{
							name: "profile.jpg",
							file: {
								url: "/user-placeholder.png",
							},
						},
					],
				},
			},
		},
		{
			id: "10",
			properties: {
				Nome: {
					type: "title",
					name: "Isabel White",
				},
				Email: {
					type: "email",
					email: "isabel.white@example.com",
				},
				Telefone: {
					type: "phone_number",
					phone_number: "+8888888888",
				},
				Função: {
					type: "select",
					select: {
						name: "Voluntário",
					},
				},
				Imagem: {
					type: "files",
					files: [
						{
							name: "profile.jpg",
							file: {
								url: "/user-placeholder.png",
							},
						},
					],
				},
			},
		},
		{
			id: "11",
			properties: {
				Nome: {
					type: "title",
					name: "Jack Anderson",
				},
				Email: {
					type: "email",
					email: "jack.anderson@example.com",
				},
				Telefone: {
					type: "phone_number",
					phone_number: "+9999999999",
				},
				Função: {
					type: "select",
					select: {
						name: "Bolsista",
					},
				},
				Imagem: {
					type: "files",
					files: [
						{
							name: "profile.jpg",
							file: {
								url: "/user-placeholder.png",
							},
						},
					],
				},
			},
		},
		{
			id: "12",
			properties: {
				Nome: {
					type: "title",
					name: "Kelly Martinez",
				},
				Email: {
					type: "email",
					email: "kelly.martinez@example.com",
				},
				Telefone: {
					type: "phone_number",
					phone_number: "+1010101010",
				},
				Função: {
					type: "select",
					select: {
						name: "Voluntário",
					},
				},
				Imagem: {
					type: "files",
					files: [
						{
							name: "profile.jpg",
							file: {
								url: "/user-placeholder.png",
							},
						},
					],
				},
			},
		},
	]
	return (
		<div>
			<h1>Membros do PET</h1>
			<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4">
				{members.map((member) => (
					<Card key={member.id}>
						<CardHeader className="flex flex-col items-center">
							{member.properties.Imagem.files.map((file) => (
								<Avatar key={file.name}>
									<AvatarImage src={file.file.url} alt={file.name} />
									<AvatarFallback>
										{member.properties.Nome.name
											.split(" ")
											.map((name) => name[0])
											.slice(0, 2)
											.join("")}
									</AvatarFallback>
								</Avatar>
							))}
							<CardTitle>{member.properties.Nome.name}</CardTitle>
						</CardHeader>{" "}
						<CardContent>
							<p>Email: {member.properties.Email.email}</p>
							<p>Telefone: {member.properties.Telefone.phone_number}</p>
							<p>Função: {member.properties.Função.select.name}</p>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	)
}
