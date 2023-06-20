'use client';

import Input from '@/app/components/Form/input';
import Header from '@/app/components/Header';
import Sidebar from '@/app/components/Sidebar';
import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

export default function CreateUser() {
	const { push, back } = useRouter();

	return (
		<Box>
			<Header />
			<Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
				<Sidebar />
				<Box flex="1" borderRadius="8" bg="gray.800" p="8">
					<Heading size="lg" fontWeight="normal">
						Criar usuário
					</Heading>

					<Divider my="6" borderColor="gray.700" />

					<VStack spacing="8">
						<SimpleGrid minChildWidth="240px" spacing="8" w="100%">
							<Input name="name" label="Nome completo" />
							<Input name="email" label="E-mail" />
						</SimpleGrid>
						<SimpleGrid minChildWidth="240px" spacing="8" w="100%">
							<Input name="password" label="Senha" type="password" />
							<Input name="password_confirmation" label="Confirme sua senha" type="password" />
						</SimpleGrid>
					</VStack>

					<Flex mt="8" justify="flex-end">
						<HStack spacing="4">
							<Button colorScheme="whiteAlpha" onClick={back}>
								Cancelar
							</Button>
							<Button colorScheme="pink">Salvar</Button>
						</HStack>
					</Flex>
				</Box>
			</Flex>
		</Box>
	);
}
