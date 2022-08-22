import { ThrowStmt } from '@angular/compiler';
import { ChangeDetectorRef, Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import { AddProductInputDTO, Categoria, Color, GetColorOutPutDTO } from '../core/models/modelMELI';
import { Producto } from '../core/models/ModelMELI';
import { ProductoService } from '../core/services/producto.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'product-config',
  templateUrl: './product-config.component.html',
  styleUrls: ['./product-config.component.css']
})
export class ProductConfigComponent {

  registrationForm = this.fb.group({
    file: [null]
  })
  
  colors: Color[] = [];    
  categorias: Categoria[] = [];
  productDTO: AddProductInputDTO = {} as AddProductInputDTO;
  selectedProduct: Producto = {} as Producto;
  productDT: Producto = {} as Producto;
  selectedColor: Color = {} as Color;  
  selectedCategoria: Categoria = {} as Categoria;

  imageUrl: any = 'Content/upimage.png';
  nompreProducto: any;
  descProducto: any;
  valor: any;
  editFile: boolean = true;
  removeUpload: boolean = false;
  
  @Output() closeModal = new EventEmitter<any>();

  @Input()
  set productDS(value: Producto) {

    this.productDT = value;
  
    
  }

  constructor(private productServ: ProductoService, public fb: FormBuilder, private cd: ChangeDetectorRef, private messageService: MessageService) {
    /*Carga de combobox*/                
    this.getColors();    
    this.getCategoria();
  }

  ngOnInit(): void {    
    /*Validación imagen por defecto*/
    if (this.productDT.imagen != null) {
      this.imageUrl = 'data:image/jpeg;base64,' + this.productDT.imagen;
    } else {
      this.imageUrl = 'assets/upimage.png';
    }

    if (this.productDT.idProducto != null) {
      this.selectedColor = this.productDT.color;      
      this.selectedCategoria = this.productDT.categoria;
      this.nompreProducto = this.productDT.nombre;
      this.descProducto = this.productDT.descripcion;
      this.valor = this.productDT.valorUnit;
    } else {
      this.selectedColor.color = 'Color';      
      this.selectedCategoria.categoria = 'Categoria';

    }

  }

  getColors() {
    this.productServ.getColors().subscribe(res => {
      this.colors = res;          
    });
  }

  getCategoria() {
    this.productServ.getCategoria().subscribe(res => {
      this.categorias = res;
      console.log(res);
    });
  }

  /**
   * Carga de fotografía
   * @param event
   */
  uploadFile(event) {
    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);

      
      reader.onload = () => {
        this.imageUrl = reader.result;
        this.registrationForm.patchValue({
          file: reader.result
        });
        this.editFile = false;
        this.removeUpload = true;
      }
      
      this.cd.markForCheck();
    }
  }
  

  base64Image: any;

  getBase64ImageFromURL(url: string) {
    return Observable.create((observer: Observer<string>) => {
      let img = new Image();
      img.crossOrigin = 'Anonymous';
      img.src = url;
      if (!img.complete) {
        img.onload = () => {
          observer.next(this.getBase64Image(img));
          observer.complete();
        };
        img.onerror = (err) => {
          observer.error(err);
        };
      } else {
        observer.next(this.getBase64Image(img));
        observer.complete();
      }
    });
  }



  getBase64Image(img: HTMLImageElement) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/png");
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  }

  save() {
    this.getBase64ImageFromURL(this.imageUrl).subscribe(base64data => {
      console.log(base64data);
      this.base64Image = base64data;

      this.selectedProduct.imagen = this.base64Image;
      this.selectedProduct.nombre = this.nompreProducto;      
      this.selectedProduct.descripcion = this.descProducto;
      this.selectedProduct.valorUnit = this.valor;
      this.selectedProduct.color = {} as Color;
      this.selectedProduct.categoria = {} as Categoria;
      this.selectedProduct.color.idColor = this.selectedColor.idColor;      
      this.selectedProduct.color.color = this.selectedColor.color;   
      this.selectedProduct.categoria.idCategoria = this.selectedCategoria.idCategoria;      
      this.selectedProduct.categoria.categoria = this.selectedCategoria.categoria;   
      this.productServ.saveProduct(this.selectedProduct).subscribe(result => {  
        this.messageService.add({severity:'success', summary:'Mensaje', detail:'Producto Guardado exitosamente'});
        this.closeModal.emit();
          }, error => { console.error(error);
            alert("Error");
      });
    });    
  }


}
