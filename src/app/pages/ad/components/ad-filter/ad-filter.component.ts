import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdService } from '../../../../services/ad.service';

@Component({
  selector: 'app-ad-filter',
  templateUrl: './ad-filter.component.html',
  styleUrls: ['./ad-filter.component.scss']
})
export class AdFilterComponent implements OnInit {
  searchText: string;
  ads = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private adService: AdService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(res => {
      this.searchText = res.search;
      this.adService.findAds(res.search).subscribe(ads => {
        this.ads = ads;
        console.log(ads);
      });
    });
  }

  onSearch() {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParamsHandling: 'merge',
      queryParams: {
        search: this.searchText
      }
    });
  }
}
