import { Icon, Link as ChakraLink, LinkProps as ChakraLinkProps, Text } from '@chakra-ui/react';
import ActiveLink from '../../ActiveLink';

interface NavLinkProps extends ChakraLinkProps {
	icon: React.ElementType;
	children: string;
	href: string;
}

export default function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
	return (
		<ActiveLink href={href} legacyBehavior passHref>
			<ChakraLink as="a" display="flex" alignItems="center" {...rest}>
				<Icon as={icon} fontSize="20" />
				<Text ml="4" fontWeight="medium">
					{children}
				</Text>
			</ChakraLink>
		</ActiveLink>
	);
}
