import { Component, inject } from '@angular/core';
import { ColorService } from 'services';

@Component({
    selector: 'Colors',
    imports: [],
    templateUrl: './colors.html',
    styleUrl: './colors.scss'
})
export class Colors {
    colorService = inject(ColorService)
    currentColor = ''

    setColor(){
        this.colorService.setColor(this.currentColor)
    }
}