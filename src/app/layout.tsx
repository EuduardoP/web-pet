import localFont from "next/font/local"
import "./styles/globals.css"
import ClientProvider from "@/components/ClientProvider"
import FooterComponent from "@/components/footer/footerComponent"
import HeaderComponent from "@/components/header/headerComponent"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
})
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
})

export const metadata: Metadata = {
	title: "PET Elétrica UFSM",
	description: "Página oficial do PET Engenharia Elétrica da UFSM",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className="w-full h-full">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased w-full h-full`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<div className="w-full flex flex-col min-h-screen">
						<HeaderComponent />
						<main className="flex-grow w-full flex flex-col items-center p-4 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
							<ClientProvider>{children}</ClientProvider>
						</main>
						<FooterComponent />
					</div>
				</ThemeProvider>
			</body>
		</html>
	)
}
