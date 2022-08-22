import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AddProductInputDTO, Categoria, Color, DeleteProductInputDTO, GetColorOutPutDTO } from '../models/modelMELI';
import { Producto } from '../models/modelMELI';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  urlProducto: string = 'http://localhost:8180/producto';
  urlColor: string = 'http://localhost:8180/color';
  urlCategoria: string = 'http://localhost:8180/categoria';  

  getAllProducts() {
    return this.http.get<Producto[]>(this.urlProducto + '/GetAllProducts');
  }

  getColors() {
    return this.http.get<Color[]>(this.urlColor + '/GetColors');
  }

  getCategoria() {
    return this.http.get<Categoria[]>(this.urlCategoria + '/GetCategorias');
  }
  
  saveProduct(input: Producto) {
    return this.http.post(this.urlProducto, input);
  }

  deleteProduct(id:number) {
    return this.http.delete(this.urlProducto + "/delete/" + id);
  }

}
