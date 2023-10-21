import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent {
  
  formulario:FormGroup;
  
  constructor( private productsService: ProductsService, private router: Router ){
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      tipo: new FormControl(),
      precio: new FormControl(),
 
    })
  }

  async onSubmit(){
    console.log(this.formulario.value);
    const res = await this.productsService.addProductos(this.formulario.value);
    console.log(res);
    this.router.navigate(['/']);
    
  }

}
