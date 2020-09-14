import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AdService } from '../../../services/ad.service';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit {

  ads$: Observable<any[]>;
  ad: any;
  user: any;

  constructor(
    private adService: AdService
  ) {
  }

  ngOnInit(): void {
    this.ads$ = this.adService.getAll();
  }


  approveAd(ad: any): void {
    ad.adStatus = 1;
    this.adService.update(ad).subscribe();
  }

  disapproveAd(ad: any): void {
    ad.adStatus = 2;
    this.adService.update(ad).subscribe();
  }
}
