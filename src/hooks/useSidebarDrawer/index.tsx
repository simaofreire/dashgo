import { SidebarDrawerContext } from '@/contexts/SidebarDrawerContext';
import { useContext } from 'react';

export function useSidebarDrawer() {
	const context = useContext(SidebarDrawerContext);

	return context;
}
