'use client';

import { SidebarDrawerProvider } from '@/contexts/SidebarDrawerContext';
import { ChakraProvider } from '@/providers/ChakraProvider';
import { makeServer } from '@/services/mirage';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
	weight: ['400', '500', '700'],
	subsets: ['latin']
});

if (process.env.NODE_ENV === 'development') {
	makeServer();
}

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
