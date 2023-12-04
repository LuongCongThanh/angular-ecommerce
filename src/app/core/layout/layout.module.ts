import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LayoutService } from '@core/service/layout/layout.service';

import { MainLayoutComponent } from '@layout/main-layout/main-layout.component';
import { TranslateModule } from '@ngx-translate/core';
import { PrimaryLayoutComponent } from './primary-layout/primary-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
	imports: [CommonModule, RouterModule, TranslateModule, FormsModule, NzDropDownModule, NzIconModule.forChild([])],
	exports: [],
	providers: [LayoutService],
	declarations: [MainLayoutComponent, PrimaryLayoutComponent, HeaderComponent, FooterComponent],
})
export class LayoutModule {}
