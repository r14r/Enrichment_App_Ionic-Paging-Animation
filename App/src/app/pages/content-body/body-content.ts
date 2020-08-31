import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { TRANSITION_IN_KEY, TRANSITION_OUT_KEY } from '../../utils/body-content-transition';

import { Content1Page } from '../content-page01/content-one';
import { Content2Page } from '../content-page02/content-two';
import { Content3Page } from '../content-page03/content-three';

@Component({
	selector: `body-content`,
	template: `<ion-nav [root]="rootPage" #nav class="content-nav"></ion-nav>`
})
export class BodyContentComponent {

	@ViewChild('nav', { read: ElementRef, static: false }) router: Router;

	processTransition(previousIndex: number, selectedIndex: number, animation: Animation) {
		if (previousIndex > selectedIndex) {
			// it's a pop
			return this.router.navigate([{ animation: TRANSITION_OUT_KEY, ev: { animation } }]);
		} else {
			// it's a push
			return this.router.navigate([this.getPageForIndex(selectedIndex), { animation: TRANSITION_IN_KEY, ev: { animation } }]);
		}
	}

	getPageForIndex(index: number) {
		if (index === 0) {
			return Content1Page;
		} else if (index === 1) {
			return Content2Page;
		} else {
			return Content3Page;
		}
	}
}
