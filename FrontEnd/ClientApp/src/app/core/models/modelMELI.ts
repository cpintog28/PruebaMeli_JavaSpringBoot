export interface Producto {
  idProducto: number;
  nombre: string;
  descripcion: string;
  valorUnit: number;
  idColor: number;  
  idCategoria: number;
  color: Color;
  categoria: Categoria;
  //color: string;
  //categoria: string;  
  imagen: any;
}

export interface GetColorOutPutDTO {
  color: Color[];
}

export interface Color {  
  color: string;
  descripcion: string;
  idColor: number;
}

/*export interface Cliente {
  idCliente: number;
  nombre: string;
  descripcion: string;
  nit_cc: number;
  celular: number;
}*/

export interface Categoria {
  categoria: string;
  descripcion: string;
  idCategoria: number;
}

export interface AddProductInputDTO {
  product: Producto;
}

export interface DeleteProductInputDTO {
  idProduct: number;
}
