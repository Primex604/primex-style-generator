import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ColorService {
    private _color = new BehaviorSubject('');
    public color = this._color.asObservable()

    setColor(value: string){
        this._color.next(value)
    }
}
