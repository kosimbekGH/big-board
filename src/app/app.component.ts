import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit{

  ngOnInit(): void {
    localStorage.setItem('test','dfgdsf');
    localStorage.getItem('test');
    console.log(localStorage.getItem('test'));
  }

}
