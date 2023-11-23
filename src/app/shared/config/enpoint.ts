import { environment } from '@env/environment';

const ENV = {
	auth: environment.app.auth,
};

export const ENDPOINT = {
	auth: `${ENV.auth}`,
};
