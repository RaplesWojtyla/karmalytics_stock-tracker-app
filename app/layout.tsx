import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Karmalytics",
	description: "Pantau harga saham real-time, atur notifikasi harga kustom, dan akses analisa emiten mendalam untuk keputusan investasi yang lebih cerdas.",
};

/**
 * Root layout component that sets the document language, theme, and font variables and renders the page content.
 *
 * @param children - The content to render inside the layout's body.
 * @returns The root HTML element containing a body with the configured font CSS variables and `antialiased` class that wraps `children`.
 */
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="id" className="dark">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}