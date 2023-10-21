import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  prodId: any;
  product: any;
  docSnap: any;
  
  constructor( 
    private productsService: ProductsService ,
    private ruta: ActivatedRoute,
    private router: Router
    ){
      this.formulario = new FormGroup({
        nombre: new FormControl(''),
        tipo: new FormControl(),
        precio: new FormControl(),
    })

    this.ruta.params.subscribe(params =>{
      console.log(params['id']);
      this.prodId = params['id'];
    })

  }

  async onSubmit(){
    console.log(this.formulario.value);

    const res = await this.productsService.updateProductos(this.docSnap, this.formulario.value);
    console.log(res);
    this.router.navigate(['/']);
    
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
