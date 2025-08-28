import { Component, inject } from '@angular/core';
import { ClipPathService, FilterService } from 'services';
import { ClipPathOptions, clipPathExamples, StyleOptions, BasicShapeOptions } from 'cssDefs.enum';
import { Expandable } from 'app/expandable/expandable';
import { Dimensions, Colors, ClipPath, Filter, Mask } from './options';

@Component({
    selector: 'StyleViewer',
    imports: [Expandable, Dimensions, Colors, ClipPath, Filter, Mask],
    templateUrl: './style-viewer.html',
    styleUrl: './style-viewer.scss'
})
export class StyleViewer {
    clipPathService = inject(ClipPathService);
    filterService = inject(FilterService)
    cpOptions = ClipPathOptions
    stlOptions = StyleOptions

    clipPath: string = 'circle(40%)';
    filter: string = '';
    mode: number = 0;

    clipPathOptions = [
        {
            mode: 'inset',
            value: BasicShapeOptions.inset,
            example: 'inset(' + clipPathExamples.inset + ')',
            explanation: ''
        },
        {
            mode: 'circle', 
            value: BasicShapeOptions.circle,
            example: 'circle(40%)',
            explanation: 'When defining the circle, you can add the optional argument <radial-size> (which is the overall radius of the clipping) and/or the optional argument [at <position>] (which indicates that the radius should expand outwards with the coordinates given by <position> as its center.)',
        },
        {
            mode: 'ellipse', 
            value: BasicShapeOptions.ellipse, 
            example: 'ellipse(20% 40%)', 
            explanation: ''
        },
        {
            mode: 'polygon', 
            value: BasicShapeOptions.polygon,
            example: 'polygon(50% 15%, 90% 48%, 72% 90%, 28% 90%, 10% 48%)',
            explanation: '', 
        },
        // {mode: 'path', desc: '', syntax: '', stxExplanation: '', value: ''},
        // {mode: 'rect', desc: '', syntax: '', stxExplanation: '', value: ''},
        // {mode: 'xywh', desc: '', syntax: '', stxExplanation: '', value: ''},
        // {mode: 'shape', desc: '', syntax: '', stxExplanation: '', value: ''},
    ]

    styleOptions = [
        {text: 'dimensions', value: StyleOptions.dimensions, explanation: ''},
        {text: 'colors', value: StyleOptions.colors, explanation: ''},
        {text: 'clip-path', value: StyleOptions.clipPath, explanation: ''},
        {text: 'filter', value: StyleOptions.filter, explanation: ''},
        {text: 'mask', value:StyleOptions.mask, explanation: ''}
    ]

    onClick(option: any){
        this.mode = option
        this.clipPathService.setClipPathOption(option)
        this.clipPath = this.clipPathOptions[option].example
    }
}