import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-electronicos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './electronicos.html',
  styleUrl : './electronicos.css'
})
export class ElectronicosComponent implements OnInit {

  productos_electronicos: any[] = [];

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {

    this.obtenerProductosElectronics()

  }

  // Obtener todos los productos
  async obtenerProductosElectronics() {

    try {

      const response =
        await fetch("https://fakestoreapi.com/products/category/electronics");

      const data =
        await response.json();

      console.log("PRODUCTOS:", data);

      this.productos_electronicos = data;

      this.cd.detectChanges();

    } catch (error) {

      console.log("Error productos:", error);

    }

  }
}