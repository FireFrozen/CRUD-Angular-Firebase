import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, getDoc, updateDoc } from '@angular/fire/firestore';
import { Producto } from '../interfaces/producto';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private firestore: Firestore) { }

  addProductos(producto: Producto){
    const productoRef = collection(this.firestore, 'productos');
    return addDoc(productoRef, producto);
  }

  getProductos():Observable<Producto[]>{
    const productoRef = collection(this.firestore, 'productos');
    return collectionData(productoRef, {idField:'id'}) as Observable<Producto[]>
  }

  getOneProducto(id:any){
    const productoRef = doc(this.firestore, `productos/${id}`);
    return getDoc(productoRef);
    
  }

  deleteProductos(producto: Producto){
    const productoRef = doc(this.firestore, `productos/${producto.id}`);
    return deleteDoc(productoRef);
  }


  updateProductos(producto: Producto, productoEditado: any){
    const productoRef = doc(this.firestore, `productos/${producto.id}`);
    return updateDoc(productoRef, productoEditado);
  }
}
