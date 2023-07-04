import { Roboto } from 'next/font/google';
import { ChakraProvider } from './providers/ChakraProvider';
import { makeServer } from './services/mirage';

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
				<ChakraProvider>{children}</ChakraProvider>
			</body>
		</html>
	);
}
