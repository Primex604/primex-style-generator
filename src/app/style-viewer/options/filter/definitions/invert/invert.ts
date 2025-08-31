import { NgClass } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AmountType } from 'cssDefs.enum';
import { FilterService } from 'services';

@Component({
    selector: 'Invert',
    imports: [NgClass, FormsModule],
    templateUrl: './invert.html',
    styleUrl: './invert.scss'
})
export class Invert {
    filterService = inject(FilterService)
    invertArgs = AmountType
    optional = '?';
    definition = ''
    level_1 = false
    currentArg = -1

    number = {
        syntax: '<number>',
        value: signal(0),
        argValue: AmountType.number
    }

    percentage = {
        syntax: '<percentage>',
        value: signal(0),
        argValue: AmountType.percentage
    }

    argSelect(value: number) {
        this.level_1 = true
        this.currentArg = value
    }

    resetValues() {
        this.number.value.set(0)
        this.percentage.value.set(0)
        this.filterService.setInvert('')
    }

    onUnitChange(arg: any) {
        let compValue = '' + arg.value()
        if(arg.argValue == AmountType.percentage) compValue += '%'
        this.filterService.setInvert(compValue)
    }
}
