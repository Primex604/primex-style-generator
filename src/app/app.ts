import { Component, inject } from '@angular/core';
import { StyleViewer } from "./style-viewer/style-viewer";
import { ClipPathService, ColorService, Dimension, DimensionService, FilterService } from 'services';
import { NgStyle } from '@angular/common';
import { MaskService } from 'services';
import { Header } from './header/header';

@Component({
    selector: 'app-root',
    imports: [StyleViewer, NgStyle, Header],
    templateUrl: './app.html',
    styleUrl: './app.scss'
})
export class App {
    protected title = 'primex-style-generator';

    dimensionService = inject(DimensionService)
    colorService = inject(ColorService)
    clipPathService = inject(ClipPathService);
    filterService = inject(FilterService);
    maskService = inject(MaskService);

    dimensions: Dimension = {height: '', width: '', padding: '', margin: ''}
    clipPath: string = '';
    filter: string = '';
    mask: string = '';
    mode: number = 0;
    showExampleText: boolean = false

    constructor(){
        this.dimensionService.exampleText.subscribe((value) => {
            this.showExampleText = value
        })
        this.clipPathService.clipPath.subscribe((value) => {
            this.clipPath = value
        })
        this.filterService.filter.subscribe((value) => {
            this.filter = value
        })
        this.maskService.mask.subscribe((value) => {
            this.mask = value
        })
        this.dimensionService.dimensions.subscribe((value) => {
            this.dimensions = value
        })

    }
}
