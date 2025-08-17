import { Component } from '@angular/core';
import { StyleViewer } from "./style-viewer/style-viewer";

@Component({
  selector: 'app-root',
  imports: [StyleViewer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'primex-style-generator';
}
