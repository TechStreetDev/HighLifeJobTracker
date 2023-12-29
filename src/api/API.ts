/*
	MIT License

	Copyright (c) 2023 TechStreet

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/

export interface APIErrorResponse { readonly error: string };

export default class API {
	static APIBase = "https://api.techstreet.tech/highlife";

	static handleFetchErr(reason: any): APIErrorResponse {
		return { error: (reason.error || reason.message || reason) as string } as const;
	}

	static didError<T extends object>(res: T | APIErrorResponse): res is APIErrorResponse {
		return "error" in res;
	}

	async useEndpoint<T extends object>(endpointPath: string, init: RequestInit): Promise<T | APIErrorResponse> {
		const res = await fetch(`${API.APIBase}/${endpointPath}`, init).catch(API.handleFetchErr);
		if("error" in res) return res;
		const out = await res.json().catch(API.handleFetchErr);
		if("error" in out) return out;
		return out;
	}

	async get<T extends object>(endpointPath: string, init?: Pick<RequestInit, "credentials" | "headers">) {
		return await this.useEndpoint<T>(endpointPath, {method: "GET", ...init});
	}
}
