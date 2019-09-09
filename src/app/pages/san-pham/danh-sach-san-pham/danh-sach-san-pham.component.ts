import { Component, OnInit, NgModule } from '@angular/core';
import { MappingProductService } from "../../../mapping/mapping-product.service";
import { LocalDataSource, ServerDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ngx-danh-sach-san-pham',
  templateUrl: './danh-sach-san-pham.component.html',
  styleUrls: ['./danh-sach-san-pham.component.scss'],

})
export class DanhSachSanPhamComponent  implements OnInit {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'id',
      },
      name: {
        title: 'name',
      }
    },
  };
  source : ServerDataSource;
  Product;
  
  
   constructor(public mapApi: MappingProductService,
     public http: HttpClient
   ) {
    this.source = new ServerDataSource(http, { endPoint: 'http://localhost:5000/api/Products/GetAlls' });
    
    console.log(this.source);

  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

ngOnInit() {
  this.Product = this.loadProducts();
}
// Get employees list
loadProducts() {
  return this.mapApi.getProducts().subscribe((data: {}) => {
    this.Product = data;
      
    })
}
// Delete employee
deleteProduct(id) {
  if (window.confirm('Are you sure, you want to delete?')){
    this.mapApi.deleteProduct(id).subscribe(data => {
      this.loadProducts()
      })
    }
  }
  

}
