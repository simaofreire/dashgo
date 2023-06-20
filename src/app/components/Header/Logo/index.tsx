import { Text } from '@chakra-ui/react';
import Link from 'next/link';

export default function Logo() {
	return (
		<Text fontSize={['2xl', '3xl']} fontWeight="bold" letterSpacing="tight" w="64">
			<Link href="/">
				dashgo
				<Text color="pink.500" as="span" ml="1">
					.
				</Text>
			</Link>
		</Text>
	);
}
