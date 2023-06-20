import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';
import { createContext, ReactNode, useEffect } from 'react';

interface SidebarDrawerProviderProps {
	children: ReactNode;
}
type SidebarDrawerContextData = UseDisclosureReturn;

export const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {
	const disclosure = useDisclosure();
	const pathname = usePathname();

	useEffect(() => {
		disclosure.onClose;
	}, [pathname]);

	return <SidebarDrawerContext.Provider value={disclosure}>{children}</SidebarDrawerContext.Provider>;
}
