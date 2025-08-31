import { Component, inject } from '@angular/core';
import { BasicShapeOptions, clipPathExamples, ClipPathOptions, StyleOptions } from 'cssDefs.enum';
import { ClipPathService } from 'services';
import { Inset, Circle, Ellipse, Polygon, Path, Rect, Xywh, Shape } from "./definitions";
import { NgClass } from '@angular/common';

@Component({
	selector: 'ClipPath',
	imports: [Inset, Circle, Ellipse, Polygon, Path, Rect, Xywh, Shape, NgClass],
	templateUrl: './clip-path.html',
	styleUrl: './clip-path.scss'
})
export class ClipPath {
    clipPathService = inject(ClipPathService);
    shapes = BasicShapeOptions
    definition = 'The clip-path CSS property creates a clipping region that sets what part of an element should be shown. Parts that are inside the region are shown, while those outside are hidden.' 
    selectedArg = -1
    compatibility = 'https://caniuse.com/?search=clip-path'

    clipPath = {
        clipSource: {
            syntax: '<clip-source>',
            value: ClipPathOptions.clip_source,
            id: '',
            explanation: 'The clip source property uses not an image url but an identifier (id) of a SVG clip-path as source in order to apply the clip-path style onto the container element'
        },
        basicShape: {
            syntax: '<basic-shape',
            value: ClipPathOptions.basic_shape
        },
        geometryBox: {
            syntax: '<geometry-box>',
            value: ClipPathOptions.geometry_box,
            explanation: ''
        }
    };
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
        {
            mode: 'path', 
            value: BasicShapeOptions.path,
            example: 'polygon(50% 15%, 90% 48%, 72% 90%, 28% 90%, 10% 48%)',
            explanation: '', 
        },
        {
            mode: 'rect', 
            value: BasicShapeOptions.rect,
            example: 'polygon(50% 15%, 90% 48%, 72% 90%, 28% 90%, 10% 48%)',
            explanation: '', 
        },
        {
            mode: 'xywh', 
            value: BasicShapeOptions.xywh,
            example: 'polygon(50% 15%, 90% 48%, 72% 90%, 28% 90%, 10% 48%)',
            explanation: '', 
        },
        {
            mode: 'shape', 
            value: BasicShapeOptions.shape,
            example: 'polygon(50% 15%, 90% 48%, 72% 90%, 28% 90%, 10% 48%)',
            explanation: '', 
        },
    ]

    argSelect(option: number){
        this.selectedArg = option
    }

    clipSourceSelect(value: string){
        this.clipPath.clipSource.id = value
        this.clipPathService.setClipPath('url(' + value + ')')
    }

    onClick(option: any){
        this.mode = option
        this.clipPathService.setClipPathOption(option)
    }
}
