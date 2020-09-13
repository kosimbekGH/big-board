import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewAdComponent } from './components/new-ad/new-ad.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [NewAdComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class CreateAdModule { }
