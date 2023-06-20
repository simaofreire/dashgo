'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider as Provider } from '@chakra-ui/react';
import { theme } from '../themes/theme';

export function ChakraProvider({ children }: { children: React.ReactNode }) {
	return (
		<CacheProvider>
			<Provider theme={theme} resetCSS>
				{children}
			</Provider>
		</CacheProvider>
	);
}
