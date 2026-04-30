import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class ProductosComponent implements OnInit {

  productos: any[] = [];
  categorias: string[] = [];

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {

    this.obtenerProductos();
    this.obtenerCategorias();

  }

  // Obtener todos los productos
  async obtenerProductos() {

    try {

      const response =
        await fetch("https://fakestoreapi.com/products");

      const data =
        await response.json();

      console.log("PRODUCTOS:", data);

      this.productos = data;

      this.cd.detectChanges();

    } catch (error) {

      console.log("Error productos:", error);

    }

  }

  // Obtener solo las categorias
  async obtenerCategorias() {

    try {

      const response =
        await fetch(
          "https://fakestoreapi.com/products/categories"
        );

      const data =
        await response.json();

      console.log("CATEGORIAS:", data);

      this.categorias = data;

      this.cd.detectChanges();

    } catch (error) {

      console.log("Error categorias:", error);

    }

  }

}

