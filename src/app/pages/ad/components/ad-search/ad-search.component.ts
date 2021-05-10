import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AdListComponent } from '../ad-list/ad-list.component';
import { catchError, debounceTime, filter, switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ad-search',
  templateUrl: './ad-search.component.html',
  styleUrls: ['./ad-search.scss']
})
export class AdSearchComponent implements OnInit {
  categories = ['Все', 'Транспорт', 'Недвижимость', 'Электроника', 'Дом и сад', 'Услуги', 'Работа', 'Личные вещи', 'Животные', 'Бизнес'];
  searchControl = new FormControl();

  constructor(private router: Router) {
  }

  ngOnInit() {

  }

  onSearch() {
    this.router.navigate(['/ad-filter'], {
      queryParams: {search: this.searchControl.value}
    });
  }
}
