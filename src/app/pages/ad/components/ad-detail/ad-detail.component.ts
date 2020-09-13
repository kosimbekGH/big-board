import { Component, OnInit } from '@angular/core';
import { AdService } from '../../../../services/ad.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ad-detail',
  templateUrl: './ad-detail.component.html',
  styleUrls: ['./ad-detail.component.scss']
})
export class AdDetailComponent implements OnInit {

  ad: any;

  constructor(
    private adService: AdService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.adService.getOne(id)
      .subscribe(res => {
        console.log(res);
        this.ad = res;
      });
  }

}
