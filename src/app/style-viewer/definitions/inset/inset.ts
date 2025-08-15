import { Component, inject, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { InsetArgs, InsetLengthType, lengthTypes, figureSides, figureCorners, clipPathExamples } from 'cssDefs.enum';
import { FormsModule } from '@angular/forms';
import { General } from 'services/general';

@Component({
	selector: 'Inset',
	imports: [NgClass, FormsModule],
	templateUrl: './inset.html',
	styleUrl: './inset.scss'
})
export class Inset {
	// definition = `<inset()> = inset( <length-percentage>{1,4} [ round <'border-radius'> ]? )  `
	definition = 'Defines a rectangle at the specified inset distances from each side of the reference box.';
	optional = '?';
	generalService = inject(General)
	insetArgs = InsetArgs
	insetLengthTypes = InsetLengthType
	figureSides = figureSides
	figureCorners = figureCorners

	level_1 = false
	currentArg = -1

	length_sides = <any>{
		top: {
			value: signal(0),
			percentage: signal(0),
			unit: lengthTypes[0].unit,
			compValue: ''
		},
		right: {
			value: signal(0),
			percentage: signal(0),
			unit: lengthTypes[0].unit,
			compValue: ''
		},
		bottom: {
			value: signal(0),
			percentage: signal(0),
			unit: lengthTypes[0].unit,
			compValue: ''
		},
		left: {
			value: signal(0),
			percentage: signal(0),
			unit: lengthTypes[0].unit,
			compValue: ''
		},
	}

	border_lengths = <any>{
		top_left: {
			value: signal(0),
			percentage: signal(0),
			unit: lengthTypes[0].unit,
			compValue: ''
		},
		top_right: {
			value: signal(0),
			percentage: signal(0),
			unit: lengthTypes[0].unit,
			compValue: ''
		},
		bottom_right: {
			value: signal(0),
			percentage: signal(0),
			unit: lengthTypes[0].unit,
			compValue: ''
		},
		bottom_left: {
			value: signal(0),
			percentage: signal(0),
			unit: lengthTypes[0].unit,
			compValue: ''
		},
	}

	length_percentage = {
		syntax: '<length-percentage>',
		value: InsetArgs.length_percentage,
		composition: [
			{
				syntax: 'length',
				value: InsetLengthType.length,
				composition: <any> lengthTypes
			},
			{
				syntax: 'percentage',
				value: InsetLengthType.percentage
			}
		]
	}

	border_radius = {
		syntax: '<border-radius>',
		value: InsetArgs.border_radius
	}

	resetValues(){
		this.length_sides.top.compValue = ''
		this.length_sides.right.compValue = ''
		this.length_sides.bottom.compValue = ''
		this.length_sides.left.compValue = ''
		this.border_lengths.top_left.compValue = ''
		this.border_lengths.top_right.compValue = ''
		this.border_lengths.bottom_right.compValue = ''
		this.border_lengths.bottom_left.compValue = ''

        this.generalService.setLength(clipPathExamples.inset)
	}

	argSelect(option: number){
        this.level_1 = true
        this.currentArg = option
    }

	onUnitChange(value: any, argType: number, percentage: boolean = false){
		let side 
		switch(argType){
			case InsetArgs.length_percentage:
				side = this.length_sides[value]
				break;
			case InsetArgs.border_radius:
				side = this.border_lengths[value]
		}
		if(percentage){
			side.compValue = side.percentage() + '%'
		} else {
			side.compValue = side.value() + side.unit
		}

		let length_percentage = this.length_sides.top.compValue + ' ' + 
							this.length_sides.right.compValue + ' ' + 
							this.length_sides.bottom.compValue + ' ' + 
							this.length_sides.left.compValue 
		let border_radius = this.border_lengths.top_left.compValue + ' ' + 
						this.border_lengths.top_right.compValue + ' ' + 
						this.border_lengths.bottom_right.compValue + ' ' + 
						this.border_lengths.bottom_left.compValue 

		let newLength = length_percentage
		if(border_radius.trim().length){ //if it has anything else other than whitespaces
			if(!newLength.trim().length){
				newLength = clipPathExamples.inset	
			}
			newLength += ' round ' + border_radius
		}
		
        this.generalService.setLength(newLength)
	}
}
