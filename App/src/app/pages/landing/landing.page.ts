import { Component, OnInit, ElementRef } from '@angular/core';

import { ViewChild } from '@angular/core';

import { BodyContentComponent } from '../content-body/body-content';
import { PageObject, AnimationReadyEvent } from 'src/app/utils/paging-component';

@Component({
	selector: 'app-launch',
	// directives: [BodyContent, PagingComponent],
	templateUrl: './landing.page.html',
	styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

	@ViewChild('bodyContent', { read: ElementRef, static: false }) bodyContent: BodyContentComponent;
	private pages: PageObject[];

	private activeIndex = 0;
	private nextIndex = 0;

	constructor() { }

	ngOnInit() {
		const tempPages: PageObject[] = [];
		tempPages.push({ iconName: 'ionic' });
		tempPages.push({ iconName: 'cloud-outline' });
		tempPages.push({ iconName: 'ionitron' });
		this.pages = tempPages;

		this.pageChangeAnimationReady();
	}

	swipeLeftToRight() {
		if (this.nextIndex < this.pages.length - 1) {
			this.nextIndex++;
		}
	}

	swipeRightToLeft() {
		if (this.nextIndex > 0) {
			this.nextIndex--;
		}
	}

	pageChangeAnimationReady(event: AnimationReadyEvent = { animation: null }) {
		this.bodyContent.processTransition(this.activeIndex, this.nextIndex, event.animation).then(() => {
			this.activeIndex = this.nextIndex;
		});
	}
}
