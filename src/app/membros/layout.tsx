import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Membros - PET Elétrica UFSM",
	description: "Página oficial do PET Engenharia Elétrica da UFSM",
}

export default function MembrosLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return <>{children}</>
}
