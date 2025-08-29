import { Component, inject } from '@angular/core';
import { FilterOptions } from 'cssDefs.enum';
import { FilterService } from 'services';
import { Blur, Brightness } from './definitions';

@Component({
    selector: 'Filter',
    imports: [Blur, Brightness],
    templateUrl: './filter.html',
    styleUrl: './filter.scss'
})
export class Filter {
    filterService = inject(FilterService)
    definition = `filter = none | <filter-value-list>`
    ftrOptions = FilterOptions
    mode = -1

    filter: string = ''

    filterOptions = [
        {
            mode: 'blur',
            value: FilterOptions.blur,
            example: 'blur()',
            explanation: ''
        },
        {
            mode: 'brightness',
            value: FilterOptions.brightness,
            example: 'brightness()',
            explanation: ''
        },
        {
            mode: 'contrast',
            value: FilterOptions.contrast,
            example: 'contrast()',
            explanation: ''
        },
        {
            mode: 'drop-shadow',
            value: FilterOptions.drop_shadow,
            example: 'drop-shadow()',
            explanation: ''
        },
        {
            mode: 'grayscale',
            value: FilterOptions.grayscale,
            example: 'grayscale()',
            explanation: ''
        },
        {
            mode: 'hue-rotate',
            value: FilterOptions.hue_rotate,
            example: 'hue-rotate()',
            explanation: ''
        },
        {
            mode: 'invert',
            value: FilterOptions.invert,
            example: 'invert()',
            explanation: ''
        },
        {
            mode: 'opacity',
            value: FilterOptions.opacity,
            example: 'opacity()',
            explanation: ''
        },
        {
            mode: 'sepia',
            value: FilterOptions.sepia,
            example: 'sepia()',
            explanation: ''
        },
        {
            mode: 'saturate',
            value: FilterOptions.saturate,
            example: 'saturate()',
            explanation: ''
        },
    ]

    onClick(option: any){
        this.mode = option
    }
}