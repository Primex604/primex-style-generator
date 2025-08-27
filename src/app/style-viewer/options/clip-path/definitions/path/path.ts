import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { fillRuleType, optional, PathArgs } from 'cssDefs.enum';
import { NgClass } from '@angular/common';
import { ClipPathService } from 'services';

@Component({
    selector: 'Path',
    imports: [NgClass, FormsModule],
    templateUrl: './path.html',
    styleUrl: './path.scss'
})
export class Path {
    // <path()> = path( <'fill-rule'>? , <string> )  M 0 0 L 100 50 L 0 100 L400 27 Z | M 0 50 C 25 0, 75 100, 100 50 Z
	clipPathService = inject(ClipPathService)
    definition = `The path() CSS function accepts an SVG path string, and is used in the CSS shapes and CSS motion path modules to enable a shape to be drawn. There are some limitations to using the path() function. The path has to be defined as a single string, so a custom path can't be created using variables (var() functions). Also, all the lengths in the path are implicitly defined in pixel (px) units; other units can't be used.`
    optional = optional
    pathArgs = PathArgs
    currentArg = -1
    currentRule = -1
    level_1 = false

    fillRule = {
        syntax: '<fill-rule>',
        value: PathArgs.fill_rule,
        currentValue: '',
        composition: [
            {
                syntax: 'nonzero',
                value: fillRuleType.nonzero
            },
            {
                syntax: 'evenodd',
                value: fillRuleType.evenodd
            }
        ]
    }

    string = {
        syntax: '<string>',
        value: PathArgs.string,
        path: ''
    }

    argSelect(value: number){
        this.currentArg = value
        this.level_1 = true
    }

    ruleSelect(value: number){
        this.currentRule = value
        this.fillRule.currentValue = this.fillRule.composition[value].syntax
    }
    addPath(){
        console.log('s')
    }
    createPath(){
        this.clipPathService.setPath(this.string.path)
    }
}
