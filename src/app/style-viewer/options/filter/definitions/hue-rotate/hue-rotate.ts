import { NgClass } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HueRotateArgs } from 'cssDefs.enum';
import { FilterService } from 'services';

@Component({
    selector: 'HueRotate',
    imports: [NgClass, FormsModule],
    templateUrl: './hue-rotate.html',
    styleUrl: './hue-rotate.scss'
})
export class HueRotate {
    filterService = inject(FilterService)
    hueRotateArgs = HueRotateArgs
    optional = '?';
    definition = ''
    currentArg = -1

    angle = {
        syntax: '<angle>',
        value: signal(0),
        argValue: HueRotateArgs.angle
    }

    zero = {
        syntax: '<zero>',
        value: 0,
        argValue: HueRotateArgs.zero
    }

    argSelect(value: number) {
        this.currentArg = value
        if(this.currentArg == this.zero.argValue) this.resetValues()
    }

    resetValues() {
        this.filterService.setHueRotate('' + this.zero.value)
    }

    onUnitChange() {
        let angle = '' + (this.angle.value() ? this.angle.value() != 0 ? this.angle.value() + 'deg': this.angle.value() : 0)
        this.filterService.setHueRotate(angle)
    }
}
