import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  users: any[];

  constructor(
    private profileService: ProfileService
  ) { }

  ngOnInit(): void {
    this.users = this.profileService.getUsers();
  }

  changeUserRole(user: any, role: number): void {
    user.role = role;
    this.profileService.updateUser(user).subscribe();
  }
}
