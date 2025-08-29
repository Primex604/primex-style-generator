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
    private _exampleText = new BehaviorSubject(false);
    public exampleText = this._exampleText.asObservable();
    private _dimensions = new BehaviorSubject<Dimension>({
        height: '',
        width: '',
        padding: '',
        margin: ''
    })
    public dimensions = this._dimensions.asObservable()

    showPaddingText(value: boolean){
        this._exampleText.next(value)
    }

    setHeight(value: string){
        let updated = <Dimension> new Object({...this._dimensions.getValue(), height: value})
        console.log(this._dimensions, updated)
        this._dimensions.next(updated)
    }

    setWidth(value: string){
        let updated = <Dimension> new Object({...this._dimensions.getValue(), width: value})
        this._dimensions.next(updated)
    }

    setPadding(value: string){
        let updated = <Dimension> new Object({...this._dimensions.getValue(), padding: value})
        this._dimensions.next(updated)
    }

    setMargin(value: string){
        let updated = <Dimension> new Object({...this._dimensions.getValue(), margin: value})
        this._dimensions.next(updated)
    }
}
