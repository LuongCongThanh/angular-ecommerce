import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
	isEnglish = true;

	constructor(private translate: TranslateService) {
		translate.setDefaultLang('vi');
	}

	toggleLanguage() {
		this.isEnglish ? this.translate.use('vi') : this.translate.use('en');
		this.isEnglish = !this.isEnglish;
	}

	change(value: any) {}
}
