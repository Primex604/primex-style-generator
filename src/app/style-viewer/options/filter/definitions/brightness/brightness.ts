import { Component, inject, signal } from '@angular/core';
import { FilterService } from 'services';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AmountType } from 'cssDefs.enum';

@Component({
    selector: 'Brightness',
    imports: [NgClass, FormsModule],
    templateUrl: './brightness.html',
    styleUrl: './brightness.scss'
})
export class Brightness {
    //( [ <number> | <percentage> ]? )  
    filterService = inject(FilterService)
    brightArgs = AmountType
    optional = '?';
    definition = ''
    level_1 = false
    currentArg = -1

    number = {
        syntax: '<number>',
        value: signal(1),
        argValue: AmountType.number
    }

    percentage = {
        syntax: '<percentage>',
        value: signal(100),
        argValue: AmountType.percentage
    }

    argSelect(value: number) {
        this.level_1 = true
        this.currentArg = value
    }

    resetValues() {
        this.number.value.set(1)
        this.percentage.value.set(100)
        this.filterService.setBrightness('')
    }

    onUnitChange(arg: any) {
        let compValue = '' + arg.value()
        if(arg.argValue == AmountType.percentage) compValue += '%'
        this.filterService.setBrightness(compValue)
    }
}
