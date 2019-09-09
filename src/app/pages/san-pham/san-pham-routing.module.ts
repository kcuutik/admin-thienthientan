import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SanPhamComponent } from './san-pham.component';
import { DanhSachSanPhamComponent } from './danh-sach-san-pham/danh-sach-san-pham.component';
import { ThemSanPhamComponent } from './them-san-pham/them-san-pham.component'
import { UploadImgSanphamComponent } from './upload-img-sanpham/upload-img-sanpham.component';

const routes: Routes = [
  {
    path: '',
    component: SanPhamComponent,
    children: [
      {
        path: 'danh-sach-san-pham',
        component: DanhSachSanPhamComponent,
      },
      {
        path: 'them-san-pham',
        component: ThemSanPhamComponent,
      },
      {
        path: 'upload-img-san-pham',
        component: UploadImgSanphamComponent,
      }
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class SanPhamRoutingModule {
}

