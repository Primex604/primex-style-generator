import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FilterService {
    private _filter = new BehaviorSubject('')
    public filter = this._filter.asObservable()

    //TODO: change _filter definition to an object with multiple filters since multiple can be applied at once and correct behavior to support change

    private setFilter(value: string){
        this._filter.next(value)
    }

    resetFilter(){
        this._filter.next('none')
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

    setDropShadow(value: string){
        let dropShadow = 'drop-shadow(' + value + ')';
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

    setInvert(number: string){
        let invert = 'invert(' + number + ')';
        this.setFilter(invert)
    }

    setOpacity(number: string){
        let opacity = 'opacity(' + number + ')';
        this.setFilter(opacity)
    }

    setSepia(number: string){
        let sepia = 'sepia(' + number + ')';
        this.setFilter(sepia)
    }

    setSaturate(number: string){
        let saturate = 'saturate(' + number + ')';
        this.setFilter(saturate)
    }
}
