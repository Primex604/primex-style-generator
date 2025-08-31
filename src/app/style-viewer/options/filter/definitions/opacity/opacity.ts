import { NgClass } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AmountType } from 'cssDefs.enum';
import { FilterService } from 'services';

@Component({
    selector: 'Opacity',
    imports: [NgClass, FormsModule],
    templateUrl: './opacity.html',
    styleUrl: './opacity.scss'
})
export class Opacity {
    filterService = inject(FilterService)
    opacityArgs = AmountType
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
        this.filterService.setOpacity('')
    }

    onUnitChange(arg: any) {
        let compValue = '' + arg.value()
        if(arg.argValue == AmountType.percentage) compValue += '%'
        this.filterService.setOpacity(compValue)
    }

}
