import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ContentPage03Page } from './content-page03.page';

const routes: Routes = [
	{
		path: '',
		component: ContentPage03Page
	}
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild(routes)
	],
	declarations: [ContentPage03Page]
})
export class ContentPage03PageModule { }
