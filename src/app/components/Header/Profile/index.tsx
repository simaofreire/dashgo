import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
	showProfileData?: boolean;
}

export default function Profile({ showProfileData = true }: ProfileProps) {
	return (
		<Flex align="center">
			{showProfileData && (
				<Box mr="4" textAlign="right">
					<Text>Simão Freire</Text>
					<Text color="gray.300" fontSize="small">
						simãofreire@live.com
					</Text>
				</Box>
			)}
			<Avatar size="md" name="Simão Freire" src="https://github.com/simaofreire.png" />
		</Flex>
	);
}
