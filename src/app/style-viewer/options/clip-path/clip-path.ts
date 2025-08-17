import { Component, inject } from '@angular/core';
import { clipPathExamples, ClipPathOptions, StyleOptions } from 'cssDefs.enum';
import { General } from 'services/general';
import { Inset, Circle, Polygon } from "./definitions";

@Component({
	selector: 'ClipPath',
	imports: [Inset, Circle, Polygon],
	templateUrl: './clip-path.html',
	styleUrl: './clip-path.scss'
})
export class ClipPath {
    generalService = inject(General);
    cpOptions = ClipPathOptions
    stlOptions = StyleOptions

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
        {
            mode: 'path', 
            value: ClipPathOptions.path,
            example: 'polygon(50% 15%, 90% 48%, 72% 90%, 28% 90%, 10% 48%)',
            explanation: '', 
        },
        {
            mode: 'rect', 
            value: ClipPathOptions.rect,
            example: 'polygon(50% 15%, 90% 48%, 72% 90%, 28% 90%, 10% 48%)',
            explanation: '', 
        },
        {
            mode: 'xywh', 
            value: ClipPathOptions.xywh,
            example: 'polygon(50% 15%, 90% 48%, 72% 90%, 28% 90%, 10% 48%)',
            explanation: '', 
        },
        {
            mode: 'shape', 
            value: ClipPathOptions.shape,
            example: 'polygon(50% 15%, 90% 48%, 72% 90%, 28% 90%, 10% 48%)',
            explanation: '', 
        },
    ]

    constructor(){
        this.generalService.clipPath.subscribe((value) => {
            this.clipPath = value
        })
    }

    styleOptions = [
        {text: 'clip-path', value: StyleOptions.clipPath, explanation: 'clip path something somethin'},
        {text: 'filter', value: StyleOptions.filter, explanation: ''},
        {text: 'mask', value:StyleOptions.mask, explanation: ''}
    ]

    onClick(option: any){
        this.mode = option
        this.generalService.setClipPathOption(option)
        this.clipPath = this.clipPathOptions[option].example
    }
}
