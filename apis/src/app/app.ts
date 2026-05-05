import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductosComponent } from './productos/productos';
import { ElectronicosComponent} from './electronicos/electronicos'
import { JeweleryComponents } from "./jewelery/jewelery";
import { RopaDeHombre } from "./ropa-de-hombre/ropa-de-hombre";
import { RopaDeMujer } from './ropa-de-mujer/ropa-de-mujer';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    // ProductosComponent,
    ElectronicosComponent,
    JeweleryComponents,
    RopaDeHombre,
    RopaDeMujer
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('apis');
}