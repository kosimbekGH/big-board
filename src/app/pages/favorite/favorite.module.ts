import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [FavoriteComponent],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class FavoriteModule { }
