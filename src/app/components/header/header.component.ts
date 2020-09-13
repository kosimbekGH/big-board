import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: any;
  isAuth: boolean;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.currentUser$
      .subscribe((res: any) => {
        this.user = res;
        this.isAuth = this.profileService.isAuth();
      });
  }

  logOut(): void {
    this.profileService.logOut();
    this.isAuth = this.profileService.isAuth();
  }
}
