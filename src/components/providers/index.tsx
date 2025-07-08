"use client";

import type { Layout } from "@/types/layout";

import { FontsProvider } from "@/components/providers/fonts";
import { mono, sans } from "@/styles/fonts";

interface LayoutProvidersProps extends Layout {}

export const LayoutProviders = ({ children }: LayoutProvidersProps) => (
	<FontsProvider fonts={{ mono, sans }}>{children}</FontsProvider>
);
