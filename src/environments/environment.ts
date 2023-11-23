const domain = {
	root: '',
};

export const environment = {
	production: false,
	app: {
		root: `${domain.root}/`,
		auth: `${domain.root}/auth`,
	},
};
