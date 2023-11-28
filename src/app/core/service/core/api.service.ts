// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { HeaderPair, HttpHeadersService } from '@core/service/core/httpHeader.service';
import { catchError } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class ApiService {
	constructor(
		private http: HttpClient,
		private httpHeadersService: HttpHeadersService,
	) {}

	getData<T>(endpoint: string, params?: HttpParams, headersPairs?: any): Observable<T> {
		const httpOptions = {
			params,
			headers: this.httpHeadersService.addHeaders(headersPairs),
		};

		return this.http.get<T>(`${endpoint}`, httpOptions).pipe(
			catchError(error => {
				return this.handleError(error);
			}),
		);
	}

	postData<T>(endpoint: string, body: any, headersPairs?: HeaderPair[]): Observable<T> {
		const httpOptions = {
			headers: this.httpHeadersService.addHeaders(headersPairs),
		};

		return this.http.post<T>(`${endpoint}`, body, httpOptions).pipe(
			catchError(error => {
				return this.handleError(error);
			}),
		);
	}

	putData<T>(endpoint: string, body: any, headersPairs?: HeaderPair[]): Observable<T> {
		const httpOptions = {
			headers: this.httpHeadersService.addHeaders(headersPairs),
		};

		return this.http.put<T>(`${endpoint}`, body, httpOptions).pipe(
			catchError(error => {
				return this.handleError(error);
			}),
		);
	}

	patchData<T>(endpoint: string, body: any, headersPairs?: HeaderPair[]): Observable<T> {
		const httpOptions = {
			headers: this.httpHeadersService.addHeaders(headersPairs),
		};

		return this.http.patch<T>(`${endpoint}`, body, httpOptions).pipe(
			catchError(error => {
				return this.handleError(error);
			}),
		);
	}

	deleteData<T>(endpoint: string, headersPairs?: HeaderPair[]): Observable<T> {
		const httpOptions = {
			headers: this.httpHeadersService.addHeaders(headersPairs),
		};

		return this.http.delete<T>(`${endpoint}`, httpOptions).pipe(
			catchError(error => {
				return this.handleError(error);
			}),
		);
	}

	private handleError(error: any): Observable<never> {
		let errorMessage = '';

		if (error.error instanceof ErrorEvent) {
			errorMessage = `Client-side error: ${error.error.message}`;
		} else {
			errorMessage = `Server-side error: ${error.status} - ${error.message}`;
		}

		console.error(errorMessage);
		return throwError(errorMessage);
	}
}
