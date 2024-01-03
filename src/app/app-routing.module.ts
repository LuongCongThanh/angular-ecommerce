import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '@layout/main-layout/main-layout.component';
import { PrimaryLayoutComponent } from '@layout/primary-layout/primary-layout.component';

const routes: Routes = [
	{ path: '', redirectTo: '', pathMatch: 'full' },
	{
		path: '',
		component: PrimaryLayoutComponent,
		loadChildren: () => import('./feature/authentication/authentication.module').then(m => m.AuthenticationModule),
	},
	{
		path: 'admin',
		component: MainLayoutComponent,
		loadChildren: () => import('./feature/administration/administration.module').then(m => m.AdministrationModule),
		// canActivate: [AuthGuard],
		// data: { breadcrumb: 'Admin' },
	},
	// { path: '**', redirectTo: 'page-not-found' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
