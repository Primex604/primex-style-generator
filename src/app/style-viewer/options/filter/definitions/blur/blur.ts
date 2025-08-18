import { Component, inject, signal } from '@angular/core';
import { FilterService } from 'services';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { lengthTypes } from 'cssDefs.enum';

@Component({
	selector: 'Blur',
	imports: [NgClass, FormsModule],
	templateUrl: './blur.html',
	styleUrl: './blur.scss'
})
export class Blur {
	filterService = inject(FilterService)
	optional = '?';
	definition = ''
	level_1 = false

	length = {
		syntax: '<length>',
		value: signal(0),
		lengthUnit: signal(lengthTypes[0].unit),
		composition: lengthTypes
	}

	argSelect() {
		this.level_1 = true
	}
	
	resetValues() {
        this.length.value.set(0)
        this.filterService.setBlur('')
	}

	onUnitChange(){
        let compValue = this.length.value() + this.length.lengthUnit()
        this.filterService.setBlur(compValue)
	}
}
