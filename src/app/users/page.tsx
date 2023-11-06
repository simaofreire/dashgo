'use client';

import {
	Box,
	Button,
	Checkbox,
	Flex,
	Heading,
	Icon,
	Spinner,
	Table,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
	useBreakpointValue
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import Header from '../components/Header';
import Pagination from '../components/Pagination';
import Sidebar from '../components/Sidebar';
import { useUsers } from '@/hooks/useUsers';
import { useState } from 'react';
import NextLink from 'next/link';
import { queryClient } from '@/services/queryClient';
import { api } from '@/services/api';

export default function Users() {
	const { push } = useRouter();
	const [page, setPage] = useState(1);
	const { data, isError, isLoading, isSuccess, isFetching } = useUsers(page);

	const isWideVersion = useBreakpointValue({ base: false, lg: true });

	async function handlePreFretchUser(id: string) {
		return await queryClient.prefetchQuery({
			queryKey: ['user', id],
			queryFn: async () => {
				const { data } = await api.get(`users/${id}`);

				return data;
			},
			staleTime: 1000 * 60 * 10 // 10 minutes
		});
	}

	return (
		<Flex direction="column">
			<Header />

			<Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
				<Sidebar />

				<Box flex="1" borderRadius="8" bg="gray.800" p="8">
					<Flex mb="8" justify="space-between" align="center">
						<Heading size="lg" fontWeight="normal">
							Usuários
							{!isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4" />}
						</Heading>

						<NextLink legacyBehavior href="/users/create">
							<Button
								as="a"
								size="sm"
								fontSize="sm"
								colorScheme="pink"
								leftIcon={<Icon as={RiAddLine} fontSize="20" />}
							>
								Criar novo
							</Button>
						</NextLink>
					</Flex>

					{isLoading ? (
						<Flex justify="center">
							<Spinner />
						</Flex>
					) : isError ? (
						<Flex justify="center">
							<Text>Falha ao obter dados dos usuários</Text>
						</Flex>
					) : (
						isSuccess && (
							<>
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
										{data?.users.map(({ id, email, name, createdAt }) => (
											<Tr key={id}>
												<Td px={['4', '4', '6']}>
													<Checkbox colorScheme="pink" />
												</Td>
												<Td>
													<Box>
														<Text fontWeight="bold" onMouseEnter={() => handlePreFretchUser(id)} color="purple.400">
															{name}
														</Text>
														<Text fontSize="sm" color="green.300">
															{email}
														</Text>
													</Box>
												</Td>
												{isWideVersion && <Td>{createdAt}</Td>}
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
										))}
									</Tbody>
								</Table>
								<Pagination totalCountOfRegisters={data?.totalCount} currentPage={page} onPageChange={setPage} />
							</>
						)
					)}
				</Box>
			</Flex>
		</Flex>
	);
}
