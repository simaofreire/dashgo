import { Button } from '@chakra-ui/react';

interface PaginationItemProps {
	isCurrent?: boolean;
	pageNumber: number;
	onPageChange: (page: number) => void;
}

export default function PaginationItem({ pageNumber, isCurrent = false, onPageChange }: PaginationItemProps) {
	return (
		<Button
			size="sm"
			fontSize="xs"
			width="4"
			colorScheme={isCurrent ? 'pink' : 'gray'}
			disabled={!isCurrent}
			_disabled={isCurrent ? { bgColor: 'pink.500', cursor: 'default' } : { bgColor: 'gray.500', cursor: 'default' }}
			onClick={() => onPageChange(pageNumber)}
		>
			{pageNumber}
		</Button>
	);
}
