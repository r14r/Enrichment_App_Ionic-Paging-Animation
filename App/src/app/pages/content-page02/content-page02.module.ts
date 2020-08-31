import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ContentPage02Page } from './content-page02.page';

const routes: Routes = [
	{
		path: '',
		component: ContentPage02Page
	}
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild(routes)
	],
	declarations: [ContentPage02Page]
})
export class ContentPage02PageModule { }
