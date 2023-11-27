const domain = {
	root: '',
};
const version = {
	v0: 'v0',
	v1: 'v1',
	v2: 'v2',
};

export const environment = {
	production: false,
	app: {
		root: `${domain.root}/`,
		auth: `${domain.root}/auth-service`,
	},
};
