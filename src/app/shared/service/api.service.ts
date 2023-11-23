// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ApiService {
	private apiUrl = 'your-api-base-url';

	constructor(private http: HttpClient) {}

	private addHeaders(headers?: HttpHeaders): HttpHeaders {
		// Thêm các headers chung ở đây nếu cần
		return headers || new HttpHeaders();
	}

	getData<T>(endpoint: string, params?: HttpParams): Observable<T> {
		return this.http.get<T>(`${this.apiUrl}/${endpoint}`, {
			params,
			headers: this.addHeaders(),
		});
	}

	postData<T>(endpoint: string, body: any, headers?: HttpHeaders): Observable<T> {
		return this.http.post<T>(`${this.apiUrl}/${endpoint}`, body, {
			headers: this.addHeaders(headers),
		});
	}

	putData<T>(endpoint: string, body: any, headers?: HttpHeaders): Observable<T> {
		return this.http.put<T>(`${this.apiUrl}/${endpoint}`, body, {
			headers: this.addHeaders(headers),
		});
	}

	patchData<T>(endpoint: string, body: any, headers?: HttpHeaders): Observable<T> {
		return this.http.patch<T>(`${this.apiUrl}/${endpoint}`, body, {
			headers: this.addHeaders(headers),
		});
	}

	deleteData<T>(endpoint: string, headers?: HttpHeaders): Observable<T> {
		return this.http.delete<T>(`${this.apiUrl}/${endpoint}`, {
			headers: this.addHeaders(headers),
		});
	}
}
