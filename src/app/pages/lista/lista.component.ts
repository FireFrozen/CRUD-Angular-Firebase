import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto';
import { ProductsService } from 'src/app/services/products.service';
import { UserService } from 'src/app/services/user.service';

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

  page: number = 1;
  itemsPerPage: number = 10;

  usuario: any;
  userPhoto: any;

  hasPhoto: boolean = false;

  isLoading: boolean = true;

  statePopup: string = '';

  constructor( 
    private productsService: ProductsService, 
    public userService: UserService,
    private router: Router ){

  }

  ngOnInit(): void {
    this.productsService.getProductos().subscribe(productos =>{
      //console.log(productos);
      this.productos = productos;
      this.isLoading = false;

    });

    
    this.usuario = localStorage.getItem('usuario');
    console.log(this.usuario);
    console.log(typeof(this.usuario));

    this.userPhoto = localStorage.getItem('userPhoto');

    if ((localStorage.getItem('hasPhoto')) == ('true')){
      this.hasPhoto = true;
    } else{
      this.hasPhoto = false;
    }

  }

  async onClickDelete(product: Producto){
    const res = await this.productsService.deleteProductos(product);
    console.log(res);
  }

  onLogout(){
    this.userService.logout()
      .then(() => {
        this.router.navigate(['/']);
        localStorage.clear();
      })
      .catch(error => console.log(error));
  }

  openPopup(id : any){
    this.statePopup = id;
  }

  closePopup(){
    this.statePopup  = '';
    console.log(this.statePopup);
  }
}
