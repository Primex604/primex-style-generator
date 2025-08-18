import { Component, inject, signal } from '@angular/core';
import { FilterService } from 'services';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrightnessArgs } from 'cssDefs.enum';

@Component({
    selector: 'Brightness',
    imports: [NgClass, FormsModule],
    templateUrl: './brightness.html',
    styleUrl: './brightness.scss'
})
export class Brightness {
    //( [ <number> | <percentage> ]? )  
    filterService = inject(FilterService)
    brightArgs = BrightnessArgs
    optional = '?';
    definition = ''
    level_1 = false
    currentArg = -1

    number = {
        syntax: '<number>',
        value: signal(1),
        argValue: BrightnessArgs.number
    }

    percentage = {
        syntax: '<percentage>',
        value: signal(100),
        argValue: BrightnessArgs.percentage
    }

    argSelect(value: number) {
        this.level_1 = true
        this.currentArg = value
    }

    resetValues() {
        this.number.value.set(1)
        this.percentage.value.set(100)
        this.filterService.setBlur('')
    }

    onUnitChange(arg: any) {
        let compValue = '' + arg.value()
        if(arg.argValue == BrightnessArgs.percentage) compValue += '%'
        this.filterService.setBrightness(compValue)
    }
}
