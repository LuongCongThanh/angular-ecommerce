import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// Import các module từ ứng dụng của bạn
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from '@layout/layout.module';

// Import các module từ các tính năng (feature modules)
import { AdministrationModule } from '@feature/administration/administration.module';
import { AuthenticationModule } from '@feature/authentication/authentication.module';

// Import các module từ bên ngoài
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Import Service
import { HttpInterceptorService } from '@core/service/core/http-interceptor.service';
import { ComponentsCommonModule } from '@shared/components-common/components-common.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

export function createTranslateLoader(http: HttpClient) {
	return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		CommonModule,
		HttpClientModule,
		RouterModule,
		AppRoutingModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: createTranslateLoader,
				deps: [HttpClient],
			},
		}),
		LayoutModule,
		AuthenticationModule,
		AdministrationModule,
		ComponentsCommonModule,
		FontAwesomeModule,
	],
	providers: [
		TranslateService,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: HttpInterceptorService,
			multi: true,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
