import { useQuery } from '@tanstack/react-query';
import { api } from '../services/api';

type User = {
	id: string;
	name: string;
	email: string;
	createdAt: string;
};

type GetUsersResponse = {
	users: User[];
	totalCount: number;
};

export async function getUsers(page: number): Promise<GetUsersResponse> {
	try {
		const { data, headers, status } = await api.get('users', {
			params: {
				page
			}
		});
		if (status === 200) {
			const totalCount = headers['x-total-count'];

			const users = data.users.map(({ id, name, email, createdAt }) => {
				return {
					id: id,
					name: name,
					email: email,
					createdAt: new Date(createdAt).toLocaleDateString('pt-BR', {
						day: '2-digit',
						month: 'long',
						year: 'numeric'
					})
				};
			});

			return { users, totalCount };
		}
	} catch (error) {
		console.error('Error at getUsers', error);
	}
}

export function useUsers(page: number) {
	return useQuery({
		queryKey: ['usersData', page],
		queryFn: () => getUsers(page),
		// initialData: []
	});
}
