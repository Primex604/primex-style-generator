import { Component } from '@angular/core';

@Component({
    selector: 'Header',
    imports: [],
    templateUrl: './header.html',
    styleUrl: './header.scss'
})
export class Header {
    headerOptions = [
        'Templates','Visual Guide','Contact'
    ]
}
