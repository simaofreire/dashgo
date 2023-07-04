'use client';

import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { cloneElement } from 'react';

interface ActiveLinkProps extends LinkProps {
	children: React.ReactElement;
	exactHref?: boolean;
}

export default function ActiveLink({ children, exactHref = false, ...rest }: ActiveLinkProps) {
	let isActive = false;
	const pathname = usePathname();

	if (exactHref && (pathname === rest.href || pathname === rest.as)) isActive = true;

	if (!exactHref && (pathname.startsWith(String(rest.href)) || pathname.startsWith(String(rest.as)))) isActive = true;

	return (
		<Link {...rest}>
			{cloneElement(children, {
				color: isActive ? 'pink.400' : 'gray.50'
			})}
		</Link>
	);
}
