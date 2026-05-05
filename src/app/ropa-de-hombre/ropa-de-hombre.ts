import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ropa-de-hombre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ropa-de-hombre.html',
  styleUrl: './ropa-de-hombre.css',
})
export class RopaDeHombre implements OnInit {

  productos_ropa_hombre: any[] = [];

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {

    this.obtenerProductosRopaHombre()

  }

  async obtenerProductosRopaHombre() {

    try{

      const response = 
        await fetch("https://fakestoreapi.com/products/category/men's clothing");

      const data = 
        await response.json();

      console.log("PRODUCTOS ROPA HOMBRE:", data);

      this.productos_ropa_hombre = data;
      
      this.cd.detectChanges();

    } catch (error) {
      console.log("Error productos ropa hombre:", error);
    }
  }
}