import { Component, OnInit } from '@angular/core';
import { AdService } from '../../../../services/ad.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ad-list',
  templateUrl: './ad-list.component.html',
  styleUrls: ['./ad-list.component.scss']
})
export class AdListComponent implements OnInit {

  ads$: Observable<any[]>;

  constructor(
    private adService: AdService
  ) { }

  ngOnInit(): void {
    this.ads$ = this.adService.getSuccessAds();
  }

}
