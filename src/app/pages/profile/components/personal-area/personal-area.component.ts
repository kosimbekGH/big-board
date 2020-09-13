import { Component, OnInit } from '@angular/core';
import { AdService } from '../../../../services/ad.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-personal-area',
  templateUrl: './personal-area.component.html',
  styleUrls: ['./personal-area.component.scss']
})
export class PersonalAreaComponent implements OnInit {

  ads: Observable<any[]>;

  constructor(
    private adService: AdService
  ) { }

  ngOnInit(): void {
    this.ads = this.adService.getMyAds();
  }

}
