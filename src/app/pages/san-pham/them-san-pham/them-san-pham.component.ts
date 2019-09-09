import { Component, OnInit, Input } from '@angular/core';
import { MappingProductService } from "../../../mapping/mapping-product.service";
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'ngx-them-san-pham',
  templateUrl: './them-san-pham.component.html',
  styleUrls: ['./them-san-pham.component.scss']
})

export class ThemSanPhamComponent implements OnInit {
  
  id = this.actRoute.snapshot.params['id'];
  productDetails: any = {};
    constructor(
      public map: MappingProductService, 
      public router: Router,
      public actRoute: ActivatedRoute,
    ) { }

  ngOnInit() {  
    this.map.getProduct(this.id).subscribe((data: {}) => {
      this.productDetails = data;
    })
   }
    

   addProduct(dataProduct) {
        this.map.createProduct(this.productDetails).subscribe((data: {}) => {
          this.router.navigate(['/pages/san-pham/danh-sach-san-pham'])
        })
      }

      // updateProduct() {
      //   this.map.updateProduct(this.id, this.productDetails).subscribe(data => {
      //       this.router.navigate(['/pages/san-pham/danh-sach-san-pham'])
      //   })
    //}
  }