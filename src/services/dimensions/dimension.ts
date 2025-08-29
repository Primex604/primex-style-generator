import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Dimension{
    height: string,
    width: string,
    padding: {
        top: string,
        right: string,
        bottom: string,
        left: string
    },
    margin: {
        top: string,
        right: string,
        bottom: string,
        left: string
    }
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
        padding: {
            top: '',
            right: '',
            bottom: '',
            left: ''
        },
        margin: {
            top: '',
            right: '',
            bottom: '',
            left: ''
        }
    })
    public dimensions = this._dimensions.asObservable()

    showPaddingText(value: boolean){
        this._exampleText.next(value)
    }

    setHeight(value: string){
        let updated = <Dimension> new Object({...this._dimensions.getValue(), height: value})
        this._dimensions.next(updated)
    }

    setWidth(value: string){
        let updated = <Dimension> new Object({...this._dimensions.getValue(), width: value})
        this._dimensions.next(updated)
    }

    setPadding(value: string, side: string){
        let updated = <Dimension> new Object({...this._dimensions.getValue(), padding: {...this._dimensions.getValue().padding, [side]: value}})
        this._dimensions.next(updated)
    }

    setMargin(value: string, side: string){
        let updated = <Dimension> new Object({...this._dimensions.getValue(), margin: {...this._dimensions.getValue().margin, [side]: value}})
        this._dimensions.next(updated)
    }
}
