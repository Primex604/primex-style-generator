import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BasicShapeOptions ,RadialSizeTypes } from 'cssDefs.enum';

@Injectable({
    providedIn: 'root'
})
export class ClipPathService {
    private _clipPath = new BehaviorSubject('')
    public clipPath = this._clipPath.asObservable()
    private _clipPathOption = new BehaviorSubject(-1)
    public clipPathOption = this._clipPathOption.asObservable()
    private _length = new BehaviorSubject('')
    public length = this._length.asObservable()
    private _borderRadius = new BehaviorSubject('')
    public borderRadius = this._borderRadius.asObservable()
    private _radialExtent = new BehaviorSubject('')
    public radialExtent = this._radialExtent.asObservable()
    private _position = new BehaviorSubject('');
    public position = this._position.asObservable()

    setClipPath(value: string) {
        this._clipPath.next(value)
    }

    setClipPathOption(value: number) {
        this._clipPathOption.next(value)
    }

    setCircle(radialSize: number) {
        let rsValue = ''
        switch (radialSize) {
            case RadialSizeTypes.radial_extent:
                rsValue = this._radialExtent.value
                break;
            case RadialSizeTypes.length:
                rsValue = this._length.value
                break;
            case RadialSizeTypes.length_percentage:
                rsValue = this._length.value
                break;

        }
        let position = this._position.value
        this.setClipPath('circle(' + rsValue + ' ' + position + ')')
    }

    setInset() {
        let length_percentage = this._length.value
        let border_radius = this._borderRadius.value

        this.setClipPath('inset(' + length_percentage + border_radius + ')')
    }

    setLength(value: string) {
        this._length.next(value)
        switch (this._clipPathOption.value) {
            case BasicShapeOptions.inset:
                this.setInset()
                break
            case BasicShapeOptions.circle:
                this.setCircle(RadialSizeTypes.length)
                break;
        }
    }

    setRadialExtent(value: string) {
        this._radialExtent.next(value)
        this.setCircle(RadialSizeTypes.radial_extent)
    }

    setPath(value: string){
        let path = 'path("' + value + '")'
        this.setClipPath(path)
    }
}
