import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { SanPhamRoutingModule } from './san-pham-routing.module';
import { SanPhamComponent } from './san-pham.component';
import { DanhSachSanPhamComponent } from './danh-sach-san-pham/danh-sach-san-pham.component';
import { ThemSanPhamComponent } from './them-san-pham/them-san-pham.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UploadImgSanphamComponent } from './upload-img-sanpham/upload-img-sanpham.component';

import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    SanPhamRoutingModule,
    NbSelectModule,
    NbIconModule, FormsModule, ReactiveFormsModule,
    Ng2SmartTableModule
  ],
  declarations: [
    SanPhamComponent,
    DanhSachSanPhamComponent,
    ThemSanPhamComponent,
    UploadImgSanphamComponent
  ],
})
export class SanPhamModule { }
