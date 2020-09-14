import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './components/admin.component';
import { AdsComponent } from './components/ads/ads.component';
import { RouterModule } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';



@NgModule({
  declarations: [AdminComponent, AdsComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgxMaskModule
  ]
})
export class AdminModule { }
