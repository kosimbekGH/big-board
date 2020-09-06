import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  hideReg(){
    this.hide = !this.hide;

  }
  constructor() { }

  ngOnInit(): void {
  }

}
