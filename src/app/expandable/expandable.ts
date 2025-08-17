import { Component, input } from '@angular/core';
import { NgClass, NgTemplateOutlet } from '@angular/common';

@Component({
	selector: 'Expandable',
	imports: [NgClass, NgTemplateOutlet],
	templateUrl: './expandable.html',
	styleUrl: './expandable.scss'
})
export class Expandable {
	title = input<any>('');
	expanded = false;

	expandAction = () => {
		this.expanded = !this.expanded
	}

	expand(){
		this.expanded = !this.expanded
	}
}