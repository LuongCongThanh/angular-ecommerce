import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class AuthGuard {
	constructor(
		// private adminService: AdminService
		private router: Router,
	) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
		// if (this.adminService.getIsLoggedIn()) {
		//   return true;
		// }
		// not logged in so redirect to login page with the return url
		this.router.navigate(['/auth/login'], { queryParams: {} });
		return false;
	}
}
