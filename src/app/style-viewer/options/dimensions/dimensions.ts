import { NgClass } from '@angular/common';
import { Component, signal, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DimensionTypes, figureSides, lengthTypes } from 'cssDefs.enum';
import { DimensionService } from '../../../../services/dimensions/dimension';

@Component({
  selector: 'Dimensions',
  imports: [NgClass, FormsModule],
  templateUrl: './dimensions.html',
  styleUrl: './dimensions.scss'
})
export class Dimensions {
    dimService = inject(DimensionService)
    currentDim = 0
    dimensionTypes = DimensionTypes
    lengthTypes = lengthTypes
    figSides = figureSides

    dimensions = [
        {
            dimension: 'Size | Height - Width',
            value: DimensionTypes.size,
        },
        {
            dimension: 'Padding',
            value: DimensionTypes.padding,
        },
        {
            dimension: 'Margin',
            value: DimensionTypes.margin,
        },
    ]

    sizes = {
        height:{
            value: signal(100),
            unit: '%'
        },
        width:{
            value: signal(100),
            unit: '%'
        }
    }

    padding_sides = <any>{
		top: {
			value: signal(0),
			unit: lengthTypes[0].unit,
			compValue: ''
		},
		right: {
			value: signal(0),
			unit: lengthTypes[0].unit,
			compValue: ''
		},
		bottom: {
			value: signal(0),
			unit: lengthTypes[0].unit,
			compValue: ''
		},
		left: {
			value: signal(0),
			unit: lengthTypes[0].unit,
			compValue: ''
		},
	}

    margin_sides = <any>{
		top: {
			value: signal(0),
			unit: lengthTypes[0].unit,
			compValue: ''
		},
		right: {
			value: signal(0),
			unit: lengthTypes[0].unit,
			compValue: ''
		},
		bottom: {
			value: signal(0),
			unit: lengthTypes[0].unit,
			compValue: ''
		},
		left: {
			value: signal(0),
			unit: lengthTypes[0].unit,
			compValue: ''
		},
	}

    selectDimension(value: number){
        this.currentDim = value
        if(this.currentDim == DimensionTypes.padding || this.currentDim == DimensionTypes.margin){
            this.dimService.showPaddingText(true)
        } else {
            this.dimService.showPaddingText(false)
        }
    }

    setHeight(){
        let height = '' + this.sizes.height.value() + this.sizes.height.unit

        this.dimService.setHeight(height)
    }

    setWidth(){
        let width = '' + this.sizes.width.value() + this.sizes.width.unit

        this.dimService.setWidth(width)
    }

    setPadding(side: string){
        this.padding_sides[side].compValue = this.padding_sides[side].value() + this.padding_sides[side].unit

        let padding = ''
        for(side in this.padding_sides){
            padding += this.padding_sides[side].compValue + ' '
        }

        this.dimService.setPadding(padding)
    }

    setMargin(side: string){
        this.margin_sides[side].compValue = this.margin_sides[side].value() + this.margin_sides[side].unit

        let margin = ''
        for(side in this.margin_sides){
            margin += this.margin_sides[side].compValue + ' '
        }

        this.dimService.setMargin(margin)
    }
}
