import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdListComponent } from './components/ad-list/ad-list.component';
import { AdSearchComponent } from './components/ad-search/ad-search.component';
import { AdDetailComponent } from './components/ad-detail/ad-detail.component';
import { AdFilterComponent } from './components/ad-filter/ad-filter.component';
import { RouterModule } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';




@NgModule({
  declarations: [
    AdListComponent,
    AdSearchComponent,
    AdDetailComponent,
    AdFilterComponent
  ],
  exports: [
    AdSearchComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        NgxMaskModule
    ]
})
export class AdModule { }
