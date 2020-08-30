import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { PersonalAreaComponent } from './components/personal-area/personal-area.component';



@NgModule({
  declarations: [LoginComponent, PersonalAreaComponent],
  imports: [
    CommonModule
  ]
})
export class ProfileModule { }