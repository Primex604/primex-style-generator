import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FilterService {
    private _filter = new BehaviorSubject('')
    public filter = this._filter.asObservable()

    private setFilter(value: string){
        this._filter.next(value)
    }

    setBlur(length: string){
        let blur = 'blur(' + length + ')';
        this.setFilter(blur)
    }

    setBrightness(number: string){
        let brightness = 'brightness(' + number + ')';
        this.setFilter(brightness)
    }

    setContrast(number: string){
        let contrast = 'contrast(' + number + ')';
        this.setFilter(contrast)
    }

    setDropShadow(){
        let dropShadow = 'drop-shadow(' + + ')';
        this.setFilter(dropShadow)
    }

    setGrayscale(number: string){
        let grayscale = 'grayscale(' + number + ')';
        this.setFilter(grayscale)
    }

    setHueRotate(angle: string){
        let hueRotate = 'hue-rotate(' + + ')';
        this.setFilter(hueRotate)
    }
}
