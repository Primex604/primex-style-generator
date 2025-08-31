import { Component, inject, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { CircleArgs, CirclePosition, lengthTypes, optional, RadialExtentType, RadialSizeTypes } from 'cssDefs.enum';
import { ClipPathService } from 'services';

@Component({
    selector: 'Ellipse',
    imports: [NgClass],
    templateUrl: './ellipse.html',
    styleUrl: './ellipse.scss'
})
export class Ellipse {
    // definition = `<ellipse()> = ellipse( <radial-size>? [ at <position> ]? )  `
    definition = ''
    optional = optional
    circleArgs = CircleArgs;
    radialSizeTypes = RadialSizeTypes;
    clipPathService = inject(ClipPathService);

    length = signal(10);
    lengthUnit = lengthTypes[0].unit
    percentage = signal(100);

    level_1 = false
    level_2 = false
    currentArg = -1
    currentLvl1 = -1
    currentLvl2 = -1

    radial_size = {
        syntax: '<radial-size>',
        value: CircleArgs.radial_size,
        composition: [
            {
                syntax: '<radial-extent>',
                value: RadialSizeTypes.radial_extent,
                composition: <any>[
                    {syntax: 'closest-corner', value: RadialExtentType.closest_corner},
                    {syntax: 'closest-side', value: RadialExtentType.closest_side},
                    {syntax: 'farthest-corner', value: RadialExtentType.farthest_corner},
                    {syntax: 'farthest-side', value: RadialExtentType.farthest_side}
                ]
            },
            {
                syntax: '<length>',
                value: RadialSizeTypes.length,
                composition: <any>lengthTypes
            },
            {
                syntax: '<length-percentage>',
                value: RadialSizeTypes.length_percentage
            }
        ]
    }
    position = {
        syntax: '<position>',
        value: CircleArgs.position,
        composition: [
            {
                syntax: 'combination_1',
                composition: [
                    {pos: 'left', value: CirclePosition.left},
                    {pos: 'center', value: CirclePosition.center},
                    {pos: 'right', value: CirclePosition.right},
                    {pos: 'top', value: CirclePosition.top},
                    {pos: 'bottom', value: CirclePosition.bottom},
                    {pos: 'length-percentage', value: CirclePosition.length_percentage},
                ]
            },
            {
                syntax: 'combination_2',
                composition: [
                    [
                        {pos: 'left', value: CirclePosition.left},
                        {pos: 'center', value: CirclePosition.center},
                        {pos: 'right', value: CirclePosition.right}
                    ],
                    [
                        {pos: 'top', value: CirclePosition.top},
                        {pos: 'center', value: CirclePosition.center},
                        {pos: 'bottom', value: CirclePosition.bottom}
                    ]
                ]
            },
            {
                syntax: 'combination_3',
                composition: [
                    [
                        {pos: 'left', value: CirclePosition.left},
                        {pos: 'center', value: CirclePosition.center},
                        {pos: 'right', value: CirclePosition.right},
                        {pos: 'length-percentage', value: CirclePosition.length_percentage},
                    ],
                    [
                        {pos: 'top', value: CirclePosition.top},
                        {pos: 'center', value: CirclePosition.center},
                        {pos: 'bottom', value: CirclePosition.bottom},
                        {pos: 'length-percentage', value: CirclePosition.length_percentage},
                    ],
                ]
            },
            {
                syntax: 'combination_4',
                composition: [
                    
                ]
            }
        ]
    }

    argSelect(option: number){
        this.level_1 = true
        this.currentArg = option
    }

    displayExplanation(value: number){
        this.level_2 = true
        this.currentLvl1 = value
    }

    onChange(value: any){
        let newLength = '' + value + this.lengthUnit
        this.clipPathService.setLength(newLength)
    }
    
    onUnitSelect(value: any){
        this.lengthUnit = value
    }

    selectOption(value: any){
        this.currentLvl2 = value.value
        this.clipPathService.setRadialExtent(value.syntax)
    }

}
