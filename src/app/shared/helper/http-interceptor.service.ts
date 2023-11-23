// http-interceptor.service.ts
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		// Thêm header chung vào mỗi request
		const headers = new HttpHeaders({
			'Content-Type': 'application/json',
			// Thêm các headers khác nếu cần
		});

		const modifiedRequest = request.clone({ headers });

		// Chuyển request đã được chỉnh sửa đến bước tiếp theo
		return next.handle(modifiedRequest).pipe(
			// Xử lý lỗi chung
			catchError((error: HttpErrorResponse) => {
				let errorMessage = '';

				if (error.error instanceof ErrorEvent) {
					// Lỗi từ phía client
					errorMessage = `Client-side error: ${error.error.message}`;
				} else {
					// Lỗi từ phía server
					errorMessage = `Server-side error: ${error.status} - ${error.message}`;
				}

				console.error(errorMessage);
				return throwError(errorMessage);
			}),
		);
	}
}
