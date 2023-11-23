import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
	declarations: [HomeComponent],
	imports: [CommonModule, AdministrationRoutingModule],
})
export class AdministrationModule {}
