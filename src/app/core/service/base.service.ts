import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class BaseService {
	constructor(private http: HttpClient) {}

	paramStringArray(params: any) {
		let paramsObj = new HttpParams();
		Object.keys(params).forEach(key => {
			if (params[key]) {
				if (Array.isArray(params[key])) {
					params[key].forEach(value => {
						paramsObj = paramsObj.append(`${key}[]`, value);
					});
				} else {
					paramsObj = paramsObj.append(key, params[key]);
				}
			}
		});
		return paramsObj;
	}

	convertParams(queryParam: any) {
		const validParams = Object.keys(queryParam).reduce((value, key) => {
			if (queryParam[key] !== undefined) {
				return { ...value, [key]: queryParam[key] };
			}
			return value;
		}, {});
		let queryParams = '';
		Object.keys(validParams).forEach(key => {
			queryParams += `${key}=${validParams[key]}&`;
		});
		return queryParams;
	}

	getData(path?: string): Observable<object> {
		const options = this.getHeaders();
		return this.http.get(`${path}`, options).pipe(
			map(res => {
				return res;
			}),
			catchError(error => {
				return throwError(error);
			}),
		);
	}

	postData(path?: string, body?: any, headersPairs?: any): Observable<object> {
		const options = this.getHeaders(headersPairs);
		return this.http.post(`${path}`, body, options).pipe(
			map(res => {
				return res;
			}),
			catchError(error => {
				return throwError(error);
			}),
		);
	}

	putData(path?: string, body?: any, headersPairs?: any): Observable<any> {
		const options = this.getHeaders(headersPairs);
		return this.http.put(`${path}`, body, options).pipe(
			map(res => {
				return res;
			}),
			catchError(error => {
				return throwError(error);
			}),
		);
	}

	delete(path?: string, headersPairs?: any) {
		const options = this.getHeaders(headersPairs);
		return this.http.delete(`${path}`, options).pipe(
			map(res => {
				return res;
			}),
			catchError(error => {
				return throwError(error);
			}),
		);
	}

	private getHeaders(headersPairs?: any) {
		const httpOptions = {
			headers: new HttpHeaders(),
		};
		if (localStorage.getItem('token')) {
			const token: string | any = localStorage.getItem('token');
			httpOptions.headers = httpOptions.headers.set('Authorization', `Bearer ${token}`);
		}
		httpOptions.headers = httpOptions.headers.set('locale', localStorage.getItem('locale') || 'vi');
		httpOptions.headers = httpOptions.headers.set('Content-Type', 'application/json');
		httpOptions.headers = httpOptions.headers.set('App-Name', 'Virtual QC');

		if (headersPairs) {
			headersPairs.forEach((element: any) => {
				httpOptions.headers = httpOptions.headers.set(element.key, element.value);
			});
		}
		return httpOptions;
	}
}
