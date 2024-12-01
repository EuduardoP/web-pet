"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useQuery } from "@tanstack/react-query"

interface MemberImageProps {
	imageUrl: string | null
	name: string
	className?: string
}

export function MemberImage({ imageUrl, name, className }: MemberImageProps) {
	const { data: imageData, isError } = useQuery({
		queryKey: ["memberImage", imageUrl],
		queryFn: async () => {
			if (!imageUrl) return null
			const response = await fetch(imageUrl)
			if (!response.ok) throw new Error("Failed to fetch image")
			return response.url
		},
		enabled: !!imageUrl,
		staleTime: 55 * 60 * 1000, // 55 minutos
	})

	if (isError || !imageData) {
		return (
			<Avatar className="w-24 h-24">
				<AvatarFallback>
					{name
						.split(" ")
						.filter(
							(word) =>
								!["de", "da", "do", "das", "dos", "e"].includes(
									word.toLowerCase(),
								),
						)
						.slice(0, 2)
						.map((word) => word.charAt(0).toUpperCase())
						.join("")}
				</AvatarFallback>
			</Avatar>
		)
	}

	return (
		<img
			src={imageData}
			alt={name}
			className={`rounded-t-xl w-full h-full object-cover ${className}`}
			loading="lazy"
		/>
	)
}
