import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductosComponent } from './productos/productos';
import { ElectronicosComponent} from './electronicos/electronicos'

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    // ProductosComponent,
    ElectronicosComponent
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('apis');
}