import { Component } from '@angular/core';
import { PolygonArgs, PolygonLengthType } from 'cssDefs.enum';

@Component({
    selector: 'Polygon',
    imports: [],
    templateUrl: './polygon.html',
    styleUrl: './polygon.scss'
})
export class Polygon {
    // definition = `<polygon()> = polygon( <'fill-rule'>? [ round <length> ]? , [ <length-percentage> <length-percentage> ]# )  `
    definition = 'Defines a polygon using an SVG filling rule and a set of vertices.';
    optional = '?';
    commaSeparatedInstances = '#';

    level_1 = false
    level_2 = false
    currentArg = -1
    currentLvl1 = -1
    polygonArgs = PolygonArgs

    fillRule = {
        syntax: '<fill-rule>', 
        value: PolygonArgs.fillRule,
        composition: [
            'nonzero',
            'evenodd'
        ]
    }

    length = {
        syntax: '<length>',
        value: PolygonLengthType.length,
        composition: <any>[
            {unit: 'cap'},
            {unit: 'ch'},
            {unit: 'em'},
            {unit: 'ex'},
            {unit: 'ic'},
            {unit: 'lh'}
        ]
    }

    length_percentage = {
        syntax: '<length-percentage>',
        value: PolygonLengthType.length_percentage
    }
 
    displayExplanation(value: any){
        this.level_2 = true
        this.currentLvl1 = value
    }
}
