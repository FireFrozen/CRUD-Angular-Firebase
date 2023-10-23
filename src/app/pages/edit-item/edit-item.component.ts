import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent {
  formulario:FormGroup;

  isLoading: boolean=false;

  prodId: any;
  product: any;
  docSnap: any;

  editInvalid: boolean = false;
  
  constructor( 
    private productsService: ProductsService ,
    private ruta: ActivatedRoute,
    private router: Router
    ){
      this.formulario = new FormGroup({
        nombre: new FormControl('', [Validators.required]),
        tipo: new FormControl('', [Validators.required]),
        precio: new FormControl('', [Validators.required]),
    })

    this.ruta.params.subscribe(params =>{
      console.log(params['id']);
      this.prodId = params['id'];
    })

  }

  async onSubmit(){
    if (!this.formulario.get('nombre')?.errors?.['required'] && 
        !this.formulario.get('tipo')?.errors?.['required'] && 
        !this.formulario.get('precio')?.errors?.['required']){

          console.log(this.formulario.value);

          this.isLoading = true;

          const res = await this.productsService.updateProductos(this.docSnap, this.formulario.value);
          
          this.isLoading = false;

          console.log(res);
          this.router.navigate(['/lista']);
        } else {
            this.editInvalid = true;
        }
  }

  async ngOnInit():Promise<void> {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.docSnap = await this.productsService.getOneProducto(this.prodId);
    console.log(this.docSnap);
    
    this.product = this.docSnap.data();
    console.log(this.product);

    //this.formulario.get('nombre')?.setValue(this.product.data().nombre);  
    //this.formulario.get('tipo')?.setValue(this.product.data().tipo);  
    //this.formulario.get('precio')?.setValue(this.product.data().precio);  
    this.formulario?.setValue(this.product);
  }
}
