import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Dimension{
    height: string,
    width: string,
    padding: string,
    margin: string
}

@Injectable({
    providedIn: 'root'
})
export class DimensionService {
    private _height = new BehaviorSubject('');
    public height = this._height.asObservable();
    private _width = new BehaviorSubject('');
    public width = this._width.asObservable();
    private _padding = new BehaviorSubject('');
    public padding = this._padding.asObservable();
    private _margin = new BehaviorSubject('');
    public margin = this._margin.asObservable();
    private _dimensions = new BehaviorSubject<Dimension>({
        height: '',
        width: '',
        padding: '',
        margin: ''
    })
    public dimensions = this._dimensions.asObservable()

    setHeight(value: string){
        let updated = <Dimension> new Object({...this.dimensions, height: value})
        this._dimensions.next(updated)
    }

    setWidth(value: string){
        this._width.next(value)
    }

    setPadding(value: string){
        this._padding.next(value)
    }

    setMargin(value: string){
        this._margin.next(value)
    }
}
