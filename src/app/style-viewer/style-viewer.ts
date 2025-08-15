import { Component, inject } from '@angular/core';
import { NgStyle } from '@angular/common';
import { Circle, Polygon, Inset } from './definitions';
import { General } from 'services/general';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ClipPathOptions, clipPathExamples } from 'cssDefs.enum';

@Component({
    selector: 'StyleViewer',
    imports: [NgStyle, Circle, Polygon, Inset],
    templateUrl: './style-viewer.html',
    styleUrl: './style-viewer.scss'
})
export class StyleViewer {
    generalService = inject(General);
    cpOptions = ClipPathOptions

    clipPath: string = 'circle(40%)';
    mode: number = 0;

    clipPathOptions = [
        {
            mode: 'inset',
            value: ClipPathOptions.inset,
            example: 'inset(' + clipPathExamples.inset + ')',
            explanation: ''
        },
        {
            mode: 'circle', 
            value: ClipPathOptions.circle,
            example: 'circle(40%)',
            explanation: 'When defining the circle, you can add the optional argument <radial-size> (which is the overall radius of the clipping) and/or the optional argument [at <position>] (which indicates that the radius should expand outwards with the coordinates given by <position> as its center.)',
        },
        {
            mode: 'ellipse', 
            value: ClipPathOptions.ellipse, 
            example: 'ellipse(20% 40%)', 
            explanation: ''
        },
        {
            mode: 'polygon', 
            value: ClipPathOptions.polygon,
            example: 'polygon(50% 15%, 90% 48%, 72% 90%, 28% 90%, 10% 48%)',
            explanation: '', 
        },
        // {mode: 'path', desc: '', syntax: '', stxExplanation: '', value: ''},
        // {mode: 'rect', desc: '', syntax: '', stxExplanation: '', value: ''},
        // {mode: 'xywh', desc: '', syntax: '', stxExplanation: '', value: ''},
        // {mode: 'shape', desc: '', syntax: '', stxExplanation: '', value: ''},
    ]

    constructor(private domSanitizer: DomSanitizer){
        this.generalService.clipPath.subscribe((value) => {
            this.clipPath = value
        })
    }

    styleOptions = [
        {text: 'clip-path', value: '', explanation: 'clip path something somethin'}
    ]

    onClick(option: any){
        this.mode = option
        this.generalService.setClipPathOption(option)
        this.clipPath = this.clipPathOptions[option].example
    }
}