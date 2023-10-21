import { Component } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  productos: Producto[] = [
    // {
    //   nombre:'Pepsi',
    //   tipo:'Bebidas',
    //   precio:5
    // },
    // {
    //   nombre:'Monitor',
    //   tipo:'Electronicos',
    //   precio:200
    // },

  ];

  constructor( private productsService: ProductsService ){

  }

  ngOnInit(): void {
    this.productsService.getProductos().subscribe(productos =>{
      console.log(productos);
      this.productos = productos;

    })
  }

  async onClickDelete(product: Producto){
    const res = await this.productsService.deleteProductos(product);
    console.log(res);
  }

}
