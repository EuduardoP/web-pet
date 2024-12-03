import { getMembersData } from "@/lib/get-members-data"
import { MembersData } from "./membersData"

export default async function Page() {
	const members = await getMembersData()
	return (
		<div>
			<h2 className="scroll-m-20 pb-2 border-b text-3xl font-semibold tracking-tight first:mt-0">
				Membros do PET
			</h2>
			<MembersData data={members} />
		</div>
	)
}
