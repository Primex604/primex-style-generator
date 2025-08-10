import { Component } from '@angular/core';
import { Header } from "./header/header";
import { StyleViewer } from "./style-viewer/style-viewer";

@Component({
  selector: 'app-root',
  imports: [Header, StyleViewer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'primex-style-generator';
}
