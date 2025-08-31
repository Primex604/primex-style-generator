import { NgClass } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropShadowArgs, lengthTypes, optional } from 'cssDefs.enum';
import { FilterService } from 'services';

@Component({
    selector: 'Dropshadow',
    imports: [NgClass, FormsModule],
    templateUrl: './drop-shadow.html',
    styleUrl: './drop-shadow.scss'
})
export class DropShadow {
    filterService = inject(FilterService)
    dropShadowArgs = DropShadowArgs
    lengthTypes = lengthTypes
    optional = optional;
    colorResource = 'https://www.w3schools.com/colors/colors_converter.asp'
    definition = ''
    level_1 = false
    currentArg = -1

    rgba = {
        red: 0,
        green: 0,
        blue: 0,
        alpha: 0
    }

    hsl = {
        hue: 0,
        saturation: 0,
        lightness: 0
    }

    color = {
        syntax: '<color>',
        value: signal(''),
        argValue: DropShadowArgs.color,
        alpha: signal(0),
    }

    length = {
        syntax: '<length>{2,3}',
        argValue: DropShadowArgs.length,
        composition: [
            {
                lengthType: 'offset-x',
                value: signal(0),
                unit: lengthTypes[0].unit,
            },
            {
                lengthType: 'offset-y',
                value: signal(0),
                unit: lengthTypes[0].unit,
            },
            {
                lengthType: 'standard deviation',
                value: signal(0),
                unit: lengthTypes[0].unit,
            },
        ]
    }

    argSelect(value: number) {
        this.level_1 = true
        this.currentArg = value
    }

    resetValues() {
        this.filterService.setDropShadow('')
    }

    onUnitChange() {
        let r = parseInt(this.color.value().slice(1, 3), 16) || 0;
        let g = parseInt(this.color.value().slice(3, 5), 16) || 0;
        let b = parseInt(this.color.value().slice(5, 7), 16) || 0;
        this.rgba.red = r;
        this.rgba.green = g;
        this.rgba.blue = b;
        this.rgba.alpha = this.color.alpha()

        r /= 255
        g /= 255
        b /= 255

        let max = Math.max(r, g, b) 
        let min = Math.min(r, g, b)
        let h = (max + min) / 2
        let s = (max + min) / 2
        let l = (max + min) / 2

        if(max == min){
            h = s = 0; // achromatic
        } else {
            let d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch(max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }
        s = s*100;
        s = Math.round(s);
        l = l*100;
        l = Math.round(l);
        h = Math.round(360*h);

        this.hsl.hue = h
        this.hsl.saturation = s
        this.hsl.lightness = l

        let dropShadow  = ''
        if(this.rgba.alpha){
            dropShadow = 'rgba(' + this.rgba.red + ', ' + this.rgba.green + ', ' + this.rgba.blue + ', ' + this.rgba.alpha + ')'
        }else{
            dropShadow = this.color.value() + ' '
        }

        for(let type of this.length.composition){
            let compValue = '' + type.value() + type.unit
            dropShadow += compValue + ' '
        }

        this.filterService.setDropShadow(dropShadow)
    }
}
