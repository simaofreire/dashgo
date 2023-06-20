'use client';

import { useSidebarDrawer } from '@/hooks/useSidebarDrawer';
import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { RiMenuLine } from 'react-icons/ri';
import Logo from './Logo';
import NotificationsNav from './NotificationsNav';
import Profile from './Profile';
import SearchBox from './SearchBox';

export default function Header() {
	const isWideVersion = useBreakpointValue({ base: false, lg: true });
	const { onOpen } = useSidebarDrawer();

	return (
		<Flex as="header" w="100%" h="20" maxWidth={1480} mx="auto" px="6" align="center" mt="4">
			{!isWideVersion && (
				<IconButton
					aria-label="Open navigation"
					icon={<Icon as={RiMenuLine} />}
					fontSize="24"
					variant="unstyled"
					onClick={onOpen}
					mr="2"
				/>
			)}

			<Logo />

			{isWideVersion && <Logo />}

			{isWideVersion && <SearchBox />}

			<Flex align="center" ml="auto">
				<NotificationsNav />
				<Profile showProfileData={isWideVersion} />
			</Flex>
		</Flex>
	);
}
