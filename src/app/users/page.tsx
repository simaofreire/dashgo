'use client';

import {
	Box,
	Button,
	Checkbox,
	Flex,
	Heading,
	Icon,
	Table,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
	useBreakpointValue
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { useEffect } from 'react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import Header from '../components/Header';
import Pagination from '../components/Pagination';
import Sidebar from '../components/Sidebar';

export default function Users() {
	const { push } = useRouter();
	const isWideVersion = useBreakpointValue({ base: false, lg: true });

	useEffect(() => {
		fetch('http://localhost:3000/mirage/users')
			.then((data) => data.json())
			.then((data) => console.log(data))
			.catch((err) => console.error(err));
	}, []);

	return (
		<Flex direction="column">
			<Header />

			<Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
				<Sidebar />

				<Box flex="1" borderRadius="8" bg="gray.800" p="8">
					<Flex mb="8" justify="space-between" align="center">
						<Heading size="lg" fontWeight="normal">
							Usuários
						</Heading>

						<Link href="/users/create" legacyBehavior>
							<Button
								as="a"
								size="sm"
								fontSize="sm"
								colorScheme="pink"
								leftIcon={<Icon as={RiAddLine} fontSize="20" />}
							>
								Criar novo
							</Button>
						</Link>
					</Flex>
					<Table colorScheme="whiteAlpha">
						<Thead>
							<Tr>
								<Th px={['4', '4', '6']} color="gray.300" w="8">
									<Checkbox colorScheme="pink" />
								</Th>
								<Th>Usuário</Th>
								{isWideVersion && <Th>Data de cadastro</Th>}
								<Th w="8"></Th>
							</Tr>
						</Thead>
						<Tbody>
							<Tr>
								<Td px={['4', '4', '6']}>
									<Checkbox colorScheme="pink" />
								</Td>
								<Td>
									<Box>
										<Text fontWeight="bold">Simão Freire</Text>
										<Text fontSize="sm" color="green.300">
											simaofreire@live.com
										</Text>
									</Box>
								</Td>
								{isWideVersion && <Td>04 de Abril, 2023</Td>}
								{isWideVersion && (
									<Td>
										<Button
											as="a"
											size="sm"
											fontSize="sm"
											colorScheme="whiteAlpha"
											leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
										>
											Editar
										</Button>
									</Td>
								)}
							</Tr>
						</Tbody>
					</Table>
					<Pagination />
				</Box>
			</Flex>
		</Flex>
	);
}
