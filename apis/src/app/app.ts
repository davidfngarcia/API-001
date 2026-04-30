import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductosComponent } from './productos/productos';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ProductosComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('apis');
}