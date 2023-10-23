import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent {
  
  formulario:FormGroup;

  isLoading: boolean = false;

  creacionInvalida: boolean = false;
  
  constructor( private productsService: ProductsService, private router: Router ){
    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      tipo: new FormControl('', [Validators.required]),
      precio: new FormControl('', [Validators.required]),
 
    })
  }

  async onSubmit(){
    

    if (!this.formulario.get('nombre')?.errors?.['required'] && 
        !this.formulario.get('tipo')?.errors?.['required'] && 
        !this.formulario.get('precio')?.errors?.['required']){

          console.log(this.formulario.value);

          this.isLoading = true;

          const res = await this.productsService.addProductos(this.formulario.value);

          this.isLoading = false;

          console.log(res);
          this.router.navigate(['/lista']);
    } else{
      this.creacionInvalida = true;
    }
    
  }

}
