import { Component , OnInit , ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ropa-de-mujer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ropa-de-mujer.html',
  styleUrl: './ropa-de-mujer.css',
})
export class RopaDeMujer implements OnInit {

  productos_ropa_de_mujer: any[] = [];

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    
    this.obtenerProductosRopaDeMujer()
  }

  async obtenerProductosRopaDeMujer() {

    try {
      
      const response =
        await fetch("https://fakestoreapi.com/products/category/women's clothing");

      const data =
        await response.json();
        
      console.log("PRODUCTOS:", data);

      this.productos_ropa_de_mujer = data;

      this.cd.detectChanges();
    } catch (error) {
        
      console.log("Error productos:", error);
    }
  }
}
