import { useQuery } from '@tanstack/react-query';
import { api } from '../api';

type User = {
	id: string;
	name: string;
	email: string;
	createdAt: string;
};

export async function getUsers(): Promise<User[]> {
	const { data } = await api.get('users');

	const users = data.users.map(({ id, name, email, createdAt }: User) => {
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
	return users;
}

export function useUsers() {
	return useQuery({
		queryKey: ['usersData'],
		queryFn: getUsers,
		initialData: []
	});
}
