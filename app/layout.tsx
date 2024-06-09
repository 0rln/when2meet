import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "when-2-meet",
  description: "When2meet is a scheduling tool that allows users to identify overlapping availability for efficient meeting planning",
};

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<>
			<html lang='en' suppressHydrationWarning>
				<head />
				<body>
					<ThemeProvider
						attribute='class'
						defaultTheme='system'
						enableSystem
						disableTransitionOnChange
					>
						{children}
					</ThemeProvider>
				</body>
			</html>
		</>
	);
}