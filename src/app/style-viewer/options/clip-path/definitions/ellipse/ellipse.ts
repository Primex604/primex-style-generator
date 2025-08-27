import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'Ellipse',
    imports: [NgClass],
    templateUrl: './ellipse.html',
    styleUrl: './ellipse.scss'
})
export class Ellipse {
    // definition = `<ellipse()> = ellipse( <radial-size>? [ at <position> ]? )  `
    definition = ''
    optional = '?'
    currentArg = -1

    radial_size = {
        syntax: ''
    }

    position = {
        syntax: ''
    }

    argSelect(value: number){

    }

}
