import { Geist_Mono as FontMono, DM_Sans as FontSans } from "next/font/google";

export const mono = FontMono({
	subsets: ["latin"],
	variable: "--font-mono",
	weight: ["400", "500", "600"],
});

export const sans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
	weight: ["400", "500", "600"],
});
