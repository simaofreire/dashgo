import { faker } from '@faker-js/faker';
import { createServer, Factory, Model, Response } from 'miragejs';

type User = {
	name: string;
	email: string;
	created_at: string;
};

export function makeServer() {
	const server = createServer({
		models: { user: Model.extend<Partial<User>>({}) },

		factories: {
			user: Factory.extend({
				name(i: number) {
					// return faker.person.fullName({ firstName: faker.person.firstName(), lastName: faker.person.lastName() });
					return `User ${i}`;
				},
				email() {
					return faker.internet.email().toLowerCase();
				},
				createdAt() {
					return faker.date.recent({ days: 10 }).toISOString();
				}
			})
		},

		seeds(server) {
			server.createList('user', 200);
		},

		routes() {
			this.namespace = 'api';
			this.timing = 1000;

			this.get('/users', function (schema, request) {
				const { page = 1, per_page = 10 } = request.queryParams;

				const total = schema.all('user').length;

				const pageStart = (Number(page) - 1) * Number(per_page);
				const pageEnd = pageStart + Number(per_page);

				const users = this.serialize(schema.all('user').models.slice(pageStart, pageEnd));

				return new Response(200, { 'x-total-count': String(total) }, { users });
			});

			this.post('/users');
			this.passthrough();
			this.namespace = '';
		}
	});

	return server;
}
