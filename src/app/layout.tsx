'use client';

import { SidebarDrawerProvider } from '@/contexts/SidebarDrawerContext';
import { Roboto } from 'next/font/google';
import { ChakraProvider } from '../providers/ChakraProvider';

const roboto = Roboto({
	weight: ['400', '500', '700'],
	subsets: ['latin']
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pt-BR">
			<body className={roboto.className}>
				<ChakraProvider>
					<SidebarDrawerProvider>{children}</SidebarDrawerProvider>
				</ChakraProvider>
			</body>
		</html>
	);
}
