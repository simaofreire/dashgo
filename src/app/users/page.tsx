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
import { Link } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import Header from '../components/Header';
import Pagination from '../components/Pagination';
import Sidebar from '../components/Sidebar';
import { useUsers } from '@/services/hooks/useUsers';

export default function Users() {
	const { push } = useRouter();
	const { data, isError, isLoading, isSuccess, isFetching } = useUsers();

	const isWideVersion = useBreakpointValue({ base: false, lg: true });

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

						<Link href="/users/create">
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

					{isLoading ? (
						<Flex justify="center">
							<Spinner />
						</Flex>
					) : isError ? (
						<Flex justify="center">
							<Text>Falha ao obter dados dos usuários</Text>
						</Flex>
					) : (
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
									{data.map(({ id, email, name, createdAt }) => (
										<Tr key={id}>
											<Td px={['4', '4', '6']}>
												<Checkbox colorScheme="pink" />
											</Td>
											<Td>
												<Box>
													<Link>
														<Text fontWeight="bold">{name}</Text>
													</Link>
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
							<Pagination totalCountOfRegisters={200} currentPage={5} onPageChange={() => {}} />
						</>
					)}
				</Box>
			</Flex>
		</Flex>
	);
}
