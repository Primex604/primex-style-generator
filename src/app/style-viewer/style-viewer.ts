import { Component } from '@angular/core';

@Component({
    selector: 'StyleViewer',
    imports: [],
    templateUrl: './style-viewer.html',
    styleUrl: './style-viewer.scss'
})
export class StyleViewer {
    styleOptions = [
        {text: 'clip-path', value: '', explanation: 'clip path something somethin'},
        {text: '', value: '', explanation: ''},
        {text: '', value: '', explanation: ''},
        {text: '', value: '', explanation: ''},
        {text: '', value: '', explanation: ''},
    ]

    clipPathOptions = [
        {mode: 'circle', desc: '', syntax: 'circle( <radial-size>? [at <position>]?)', stxExplanation: '', value: ''},
        {mode: 'ellipse', desc: '', syntax: '', stxExplanation: '', value: ''},
        {mode: 'polygon', desc: '', syntax: '', stxExplanation: '', value: ''},
        {mode: 'path', desc: '', syntax: '', stxExplanation: '', value: ''},
        {mode: 'rect', desc: '', syntax: '', stxExplanation: '', value: ''},
        {mode: 'xywh', desc: '', syntax: '', stxExplanation: '', value: ''},
        {mode: 'shape', desc: '', syntax: '', stxExplanation: '', value: ''},
    ]
}