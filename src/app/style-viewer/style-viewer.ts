import { Component } from '@angular/core';
import { StyleOptions } from 'cssDefs.enum';
import { Expandable } from 'app/expandable/expandable';
import { Dimensions, Colors, ClipPath, Filter, Mask } from './options';

@Component({
    selector: 'StyleViewer',
    imports: [Expandable, Dimensions, Colors, ClipPath, Filter, Mask],
    templateUrl: './style-viewer.html',
    styleUrl: './style-viewer.scss'
})
export class StyleViewer {
    stlOptions = StyleOptions

    styleOptions = [
        {text: 'dimensions', value: StyleOptions.dimensions, explanation: ''},
        {text: 'background', value: StyleOptions.background, explanation: ''},
        {text: 'clip-path', value: StyleOptions.clipPath, explanation: ''},
        {text: 'filter', value: StyleOptions.filter, explanation: ''},
        {text: 'mask', value:StyleOptions.mask, explanation: ''}
    ]
}