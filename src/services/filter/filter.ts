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
        let blur = 'blur(' + length + ')'
        this.setFilter(blur)
    }

    setBrightness(number: string){
        let brightness = 'brightness(' + number + ')'
        this.setFilter(brightness)
    }
}
