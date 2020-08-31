import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ContentPage01Page } from './content-page01.page';

const routes: Routes = [
	{
		path: '',
		component: ContentPage01Page
	}
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild(routes)
	],
	declarations: [ContentPage01Page]
})
export class ContentPage01PageModule { }
