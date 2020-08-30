import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdListComponent } from './components/ad-list/ad-list.component';
import { AdSearchComponent } from './components/ad-search/ad-search.component';
import { AddDetailComponent } from './components/add-detail/add-detail.component';
import { AdFilterComponent } from './components/ad-filter/ad-filter.component';




@NgModule({
  declarations: [
    AdListComponent,
    AdSearchComponent,
    AddDetailComponent,
    AdFilterComponent
  ],
  exports: [
    AdSearchComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdModule { }
