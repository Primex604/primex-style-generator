import { Component, inject } from '@angular/core';
import { StyleViewer } from "./style-viewer/style-viewer";
import { ClipPathService, FilterService } from 'services';
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

    clipPathService = inject(ClipPathService);
    filterService = inject(FilterService);
    maskService = inject(MaskService);

    clipPath: string = 'circle(40%)';
    filter: string = '';
    mask: string = '';
    mode: number = 0;

    constructor(){
        this.clipPathService.clipPath.subscribe((value) => {
            this.clipPath = value
        })
        this.filterService.filter.subscribe((value) => {
            this.filter = value
        })
        this.maskService.mask.subscribe((value) => {
            this.mask = value
        })
    }
}
