// http-interceptor.service.ts
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpHeadersService } from '@core/service/core/httpHeader.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
	constructor(
		private http: HttpClient,
		private httpHeadersService: HttpHeadersService,
	) {}

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const headers = this.httpHeadersService.addHeaders();

		const modifiedRequest = request.clone({ headers });

		return this.http.request(modifiedRequest).pipe(
			catchError((error: HttpErrorResponse) => {
				let errorMessage = '';

				if (error.error instanceof ErrorEvent) {
					errorMessage = `Client-side error: ${error.error.message}`;
				} else {
					errorMessage = `Server-side error: ${error.status} - ${error.message}`;
				}

				console.error(errorMessage);
				return throwError(errorMessage);
			}),
		);
	}
}
