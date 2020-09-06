import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdModule } from './pages/ad/ad.module';
import { CreateAdModule } from './pages/create-ad/create-ad.module';
import { ProfileModule } from './pages/profile/profile.module';
import { AdListComponent } from './pages/ad/components/ad-list/ad-list.component';
import { AdSearchComponent } from './pages/ad/components/ad-search/ad-search.component';
import { NewAdComponent } from './pages/create-ad/components/new-ad/new-ad.component';
import { LoginComponent } from './pages/profile/components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { PersonalAreaComponent } from './pages/profile/components/personal-area/personal-area.component';
import { FavoriteModule } from './pages/favorite/favorite.module';
import { FavoriteComponent } from './pages/favorite/components/favorite/favorite.component';
import { AdDetailComponent } from './pages/ad/components/ad-detail/ad-detail.component';
import { AdFilterComponent } from './pages/ad/components/ad-filter/ad-filter.component';
import { FooterComponent } from './components/footer/footer.component';

const appRoutes: Routes = [
  {path: '', component: AdListComponent},
  {path: 'ad-search', component: AdSearchComponent},
  {path: 'new-ad', component: NewAdComponent},
  {path: 'login', component: LoginComponent},
  {path: 'personal-area', component: PersonalAreaComponent},
  {path: 'favorite', component: FavoriteComponent},
  {path: 'new-ad', component: NewAdComponent},
  {path: 'ad-detail', component: AdDetailComponent},
  {path: 'ad-filter', component: AdFilterComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AdModule,
    CreateAdModule,
    ProfileModule,
    FavoriteModule,
    RouterModule.forRoot(appRoutes)



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
