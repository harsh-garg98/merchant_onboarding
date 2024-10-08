import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import PageTitle from "@/components/page-title";
import { Separator } from "@/components/ui/separator";
import AIAgentVideo from "@/components/ai-agent-with-video";

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
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<PageTitle
					header="Merchant Onboarding"
					subtitle="Get started with your merchant account"
				/>
				<AIAgentVideo />
				{children}
				<footer>
					<Separator className="my-4" />
					<p className="text-center mb-5 text-sm text-slate-500">
						Developed by esynergy
					</p>
				</footer>
			</body>
		</html>
	);
}
