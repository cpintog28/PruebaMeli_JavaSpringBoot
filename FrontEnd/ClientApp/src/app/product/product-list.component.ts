import { Component } from '@angular/core';
import { Producto, Color, DeleteProductInputDTO, GetColorOutPutDTO } from '../core/models/modelMELI';
import { ProductoService } from '../core/services/producto.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  datatable: Producto[] = [];
  productItem: Producto;
  deleteitem: DeleteProductInputDTO = {} as DeleteProductInputDTO;
  colorsAux: GetColorOutPutDTO = {} as GetColorOutPutDTO;


  constructor(private productServ: ProductoService, private modalService: NgbModal,  private messageService: MessageService) {

  }

  ngOnInit(): void {
    this.onDataTable();    
  }
  
  onDataTable() {
    this.productServ.getAllProducts().subscribe(res => {
      this.datatable = res;
      console.log(res);
    });
  }

  closeResult: string;
  
  open(content, item) {
    if (item) {
      this.productItem = item;
    } else {
      this.productItem = {} as Producto;
    }

    
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.onDataTable();
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  deleteP(item: Producto) {    
    this.productServ.deleteProduct(item.idProducto).subscribe(result => {
      this.messageService.add({severity:'success', summary:'Mensaje', detail:'Producto eliminado exitosamente'});
      this.modalService.dismissAll();
      this.onDataTable();
    });
  }

}
