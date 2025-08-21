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
    definition = `clip-path = <clip-source> | [ <basic-shape> || <geometry-box> ] | none`;
    selectedArg = -1

    clipPath = {
        clipSource: {
            syntax: '<clip-source>',
            value: ClipPathOptions.clip_source,
            id: ''
        },
        basicShape: {
            syntax: '<basic-shape',
            value: ClipPathOptions.basic_shape
        },
        geometryBox: {
            syntax: '<geometry-box>',
            value: ClipPathOptions.geometry_box
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

    styleOptions = [
        {text: 'clip-path', value: StyleOptions.clipPath, explanation: 'clip path something somethin'},
        {text: 'filter', value: StyleOptions.filter, explanation: ''},
        {text: 'mask', value:StyleOptions.mask, explanation: ''}
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
