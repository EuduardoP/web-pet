import type { Metadata } from "next"
import localFont from "next/font/local"
import "./styles/globals.css"
import FooterComponent from "@/components/footer/footerComponent"
import HeaderComponent from "@/components/header/headerComponent"
import { ThemeProvider } from "@/components/theme-provider"

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
	description: "site oficiall do PET Elétrica UFSM",
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
						<main className="flex-grow w-full flex flex-col items-center pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
							{children}
						</main>
						<FooterComponent />
					</div>
				</ThemeProvider>
			</body>
		</html>
	)
}
