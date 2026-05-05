import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jewelery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jewelery.html',
  styleUrl: './jewelery.css',
})
export class JeweleryComponents implements OnInit {

  productos_jewelery: any[] = [];

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {

    this.obtenerProductosJewelery()
  }

  async obtenerProductosJewelery() {
    try {

      const response = 
      await fetch("https://fakestoreapi.com/products/category/jewelery");
      
      const data = 
      await response.json();

      console.log("PRODUCTOS:", data);

      this.productos_jewelery = data;
      
      this.cd.detectChanges();

    } catch (error) {
      
      console.log("Error productos:", error);
    }
  }
}
