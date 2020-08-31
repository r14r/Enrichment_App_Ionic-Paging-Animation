import { ViewController } from '@ionic/core';
import { ANIMATION_DURATION } from './constants';

export const TRANSITION_IN_KEY = 'bodyContentEnter';
export const TRANSITION_OUT_KEY = 'bodyContentExit';

export class BodyContentInTransition extends Transition {
	constructor(enteringView: ViewController, leavingView: ViewController, opts: TransitionOptions) {
		super(enteringView, leavingView, opts);

		// DOM READS
		const enteringElement = enteringView.pageRef().nativeElement as HTMLElement;
		const enteringContent = enteringElement.querySelector('.content-container');
		const enteringAnimation = new Animation(enteringContent);
		enteringAnimation.fromTo('translateY', `${150}px`, `${0}px`);
		enteringAnimation.fromTo('opacity', `0.0`, `1.0`);

		let exitingAnimation = null;
		if (leavingView.pageRef()) {
			const exitingElement = leavingView.pageRef().nativeElement as HTMLElement;
			const exitingContent = exitingElement.querySelector('.content-container');
			exitingAnimation = new Animation(exitingContent);
			exitingAnimation.fromTo('translateY', `${0}px`, `${-150}px`);
			exitingAnimation.fromTo('opacity', `1.0`, `0.0`);
		}

		this.element(enteringView.pageRef()).easing('ease').duration(ANIMATION_DURATION)
			.before.addClass('show-page')
			.add(enteringAnimation);

		if (exitingAnimation) {
			this.add(exitingAnimation);
		}
		if (opts.ev && opts.ev.animation) {
			this.add(opts.ev.animation);
		}
	}
}
export class BodyContentOutTransition extends Transition {
	constructor(enteringView: ViewController, leavingView: ViewController, opts: TransitionOptions) {
		super(enteringView, leavingView, opts);
		// DOM READS
		const enteringElement = enteringView.pageRef().nativeElement as HTMLElement;
		const enteringContent = enteringElement.querySelector('.content-container');
		const enteringAnimation = new Animation(enteringContent);
		enteringAnimation.fromTo('translateY', `${150}px`, `${0}px`);
		enteringAnimation.fromTo('opacity', `0.0`, `1.0`);

		let exitingAnimation = null;
		if (leavingView.pageRef()) {
			const exitingElement = leavingView.pageRef().nativeElement as HTMLElement;
			const exitingContent = exitingElement.querySelector('.content-container');
			exitingAnimation = new Animation(exitingContent);
			exitingAnimation.fromTo('translateY', `${0}px`, `${-150}px`);
			exitingAnimation.fromTo('opacity', `1.0`, `0.0`);
		}

		this.element(leavingView.pageRef()).easing('ease').duration(ANIMATION_DURATION)
			.before.addClass('show-page')
			.add(enteringAnimation);

		if (exitingAnimation) {
			this.add(exitingAnimation);
		}

		if (opts.ev && opts.ev.animation) {
			this.add(opts.ev.animation);
		}
	}
}

Transition.register(TRANSITION_IN_KEY, BodyContentInTransition);
Transition.register(TRANSITION_OUT_KEY, BodyContentOutTransition);
