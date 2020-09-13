import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { PersonalAreaComponent } from './components/personal-area/personal-area.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';



@NgModule({
  declarations: [LoginComponent, PersonalAreaComponent],
    imports: [
        CommonModule,
        RouterModule,
      ReactiveFormsModule,
      NgxMaskModule.forRoot()
    ]
})
export class ProfileModule { }
