import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MaskService {
    private _mask = new BehaviorSubject('');
    public mask = this._mask.asObservable();

    setMask(value: string){
        this._mask.next(value)
    }
}