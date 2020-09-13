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
import { NgxMaskModule } from 'ngx-mask';
import { AuthGuard } from './guards/auth.guard';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  {path: '', component: AdListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'ad-search', component: AdSearchComponent},
  {path: 'new-ad/:id', component: NewAdComponent, canActivate: [AuthGuard]},
  {path: 'personal-area', component: PersonalAreaComponent, canActivate: [AuthGuard]},
  {path: 'favorite', component: FavoriteComponent, canActivate: [AuthGuard]},
  {path: 'ad-detail/:id', component: AdDetailComponent},
  {path: 'ad-filter', component: AdFilterComponent},
  {path: '**', redirectTo: '/', pathMatch: 'full'}

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AdModule,
    HttpClientModule,
    CreateAdModule,
    ProfileModule,
    FavoriteModule,
    RouterModule.forRoot(appRoutes),
    NgxMaskModule.forRoot()
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
