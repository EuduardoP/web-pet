import { Skeleton } from "@/components/ui/skeleton"

export function LoadingPage() {
	return (
		<div className="flex flex-col gap-4">
			<div className="flex gap-4 justify-center items-center">
				{Array.from({ length: 3 }).map((_, id) => (
					<Skeleton key={id} className="h-[2.25rem] w-[4rem]" />
				))}
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4">
				{Array.from({ length: 10 }).map((_, id) => (
					<Skeleton key={id} className="h-[164px] w-auto" />
				))}
			</div>
		</div>
	)
}
