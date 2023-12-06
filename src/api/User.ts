import API from "./API";

export const api = new API();

export interface APIUserResponse {
	id: string;
	permissions: string[];
	accessed: string;
}

export default async function getUser(token: string) {
	return await api.get<APIUserResponse>(`user/?token=${token}`);
}
