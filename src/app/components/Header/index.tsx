'use client';

import { Avatar, Box, Flex, HStack, Icon, Input, Link, Text } from '@chakra-ui/react';
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri';

export default function Header() {
	return (
		<Flex as="header" w="100%" h="20" maxWidth={1480} mx="auto" px="6" align="center">
			<Link href="/">
				<Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
					dashgo
					<Text color="pink.500" as="span" ml="1">
						.
					</Text>
				</Text>
			</Link>
			<Flex
				as="label"
				flex="1"
				py="4"
				px="8"
				ml="6"
				maxWidth={400}
				alignSelf={'center'}
				color="gray.200"
				position="relative"
				bg="gray.800"
				borderRadius="full"
			>
				<Input
					px="4"
					mr="4"
					color="gray.500"
					variant="unstyled"
					placeholder="Buscar na plataforma"
					_placeholder={{ color: 'gray.400' }}
				/>
				<Icon as={RiSearchLine} fontSize="20" />
			</Flex>

			<Flex align="center" ml="auto">
				<HStack spacing="4" mx="8" pr="8" py="1" color="gray.300" borderRightWidth="1" borderColor="gray.700">
					<Icon as={RiNotificationLine} fontSize="20" />
					<Icon as={RiUserAddLine} fontSize="20" />
				</HStack>

				<Flex align="center">
					<Box mr="4" textAlign="right">
						<Text>Simão Freire</Text>
						<Text color="gray.300" fontSize="small">
							simãofreire@live.com
						</Text>
					</Box>

					<Avatar size="md" name="Simão Freire" src="https://github.com/simaofreire.png" />
				</Flex>
			</Flex>
		</Flex>
	);
}
