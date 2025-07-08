import "@/styles/core.css";

import type { Layout } from "@/types/layout";

import { LayoutProviders } from "@/components/providers";

interface AristocratRootLayoutProps extends Layout {}

const AristocratRootLayout = ({ children }: AristocratRootLayoutProps) => (
	<html lang="en" suppressHydrationWarning>
		<LayoutProviders>{children}</LayoutProviders>
	</html>
);

export default AristocratRootLayout;
