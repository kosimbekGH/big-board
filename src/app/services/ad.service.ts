import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { iterator } from 'rxjs/internal-compatibility';

@Injectable({
  providedIn: 'root'
})
export class AdService {

  constructor() {
  }

  getAll(): Observable<any[]> {
    const allAd: any[] = JSON.parse(localStorage.getItem('Ads') || '[]');
    return of(allAd);
  }

  getMyAds(): Observable<any[]> {
    const user = JSON.parse(localStorage.getItem('UserData'));
    const allAd: any[] = JSON.parse(localStorage.getItem('Ads') || '[]');

    return of(allAd.filter(item => item.id === user.id));
  }

  create(ad: string): Observable<any> {
    const getAllAds: any[] = JSON.parse(localStorage.getItem('Ads') || '[]');
    getAllAds.push(ad);
    localStorage.setItem('Ads', JSON.stringify(getAllAds));
    return of(ad);
  }

  update(ad: any): Observable<any> {
    const allAd: any[] = JSON.parse(localStorage.getItem('Ads') || '[]');
    const findAdIndex = allAd.findIndex(item => item.id === ad.id);

    if (findAdIndex !== -1) {
      allAd[findAdIndex] = {...allAd[findAdIndex], ...ad};
      localStorage.setItem('Ads', JSON.stringify(allAd));
      return of(ad);
    }
  }

  delete(adId: string): Observable<any> {
    const allAd: any[] = JSON.parse(localStorage.getItem('Ads') || '[]');
    const findAdIndex = allAd.findIndex(item => item.id === adId);

    if (findAdIndex !== -1) {
      allAd.splice(findAdIndex, 1);
      return of(true);
    }
  }
}
