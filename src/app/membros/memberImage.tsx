import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Skeleton } from "@/components/ui/skeleton"
import { Suspense } from "react"

interface MemberImageProps {
	imageUrl: string | null
	name: string
	className?: string
	isLoading: boolean
}

export function MemberImage({
	imageUrl,
	name,
	isLoading,
	className,
}: MemberImageProps) {
	if (!imageUrl || isLoading) {
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
		<Suspense fallback={<Skeleton className="h-auto w-64" />}>
			<img
				src={imageUrl}
				alt={name}
				className={`rounded-t-xl w-full h-full object-cover ${className}`}
				loading="lazy"
			/>
		</Suspense>
	)
}
