import type { Metadata } from "next";
import localFont from "next/font/local";
import "./styles/globals.css";
import FooterComponent from "@/components/footer/footerComponent";
import HeaderComponent from "@/components/header/headerComponent";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "PET Elétrica UFSM",
	description: "site oficiall do PET Elétrica UFSM",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<HeaderComponent />
					<div className="flex flex-col items-center min-h-screen pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
						{children}
					</div>

					<FooterComponent />
				</ThemeProvider>
			</body>
		</html>
	);
}
