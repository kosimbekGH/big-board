import { Component, OnInit } from '@angular/core';
import { AdService } from '../../../../services/ad.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-area',
  templateUrl: './personal-area.component.html',
  styleUrls: ['./personal-area.component.scss']
})
export class PersonalAreaComponent implements OnInit {

  ads: Observable<any[]>;

  constructor(
    private adService: AdService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.ads = this.adService.getMyAds();
  }

  editAd(e, ad: any): void {
    e.stopPropagation();
    this.router.navigate(['/new-ad', ad.id]);
  }

  deleteAd(ad: any): void {
    this.adService.delete(ad.id)
      .subscribe(() => this.ads = this.adService.getMyAds());
  }
}
