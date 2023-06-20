'use client';

import { Input } from '@/app/components/Form/input';
import Header from '@/app/components/Header';
import Sidebar from '@/app/components/Sidebar';
import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

type CreateUserFormData = {
	name: string;
	email: string;
	password: string;
	password_confirmation: string;
};

const createUserFormSchema = yup.object().shape({
	name: yup.string().required('Nome obrigatório'),
	email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
	password: yup.string().required('Senha obrigatória'),
	password_confirmation: yup.string().oneOf([undefined, yup.ref('password')], 'As senhas precisam ser iguais')
});

export default function CreateUser() {
	const { push } = useRouter();
	const { register, handleSubmit, formState } = useForm<CreateUserFormData>({
		resolver: yupResolver(createUserFormSchema) as any
	});

	const { errors, isSubmitting } = formState;

	const handleCreateUser: SubmitHandler<CreateUserFormData> = async (val) => {
		await new Promise((resolve) => setTimeout(resolve, 2000));
		console.log(val);
		push('/users');
	};

	return (
		<Flex direction="column">
			<Header />
			<Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
				<Sidebar />
				<Box as="form" onSubmit={handleSubmit(handleCreateUser)} flex="1" borderRadius="8" bg="gray.800" p={['6', '8']}>
					<Heading size="lg" fontWeight="normal">
						Criar usuário
					</Heading>

					<Divider my="6" borderColor="gray.700" />

					<VStack spacing="8">
						<SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
							<Input label="Nome completo" {...register('name')} error={errors.name} />
							<Input label="E-mail" {...register('email')} error={errors.email} />
						</SimpleGrid>
						<SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
							<Input label="Senha" type="password" {...register('password')} error={errors.password} />
							<Input
								label="Confirme sua senha"
								type="password"
								{...register('password_confirmation')}
								error={errors.password_confirmation}
							/>
						</SimpleGrid>
					</VStack>

					<Flex mt="8" justify="flex-end">
						<HStack spacing="4">
							<Link href="/users" passHref legacyBehavior>
								<Button as="a" colorScheme="whiteAlpha">
									Cancelar
								</Button>
							</Link>
							<Button colorScheme="pink" isLoading={isSubmitting} type="submit">
								Salvar
							</Button>
						</HStack>
					</Flex>
				</Box>
			</Flex>
		</Flex>
	);
}
