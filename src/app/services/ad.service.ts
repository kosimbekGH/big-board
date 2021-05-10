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

  findAds(searchText: string): Observable<any[]> {
    const allAd: any[] = JSON.parse(localStorage.getItem('Ads') || '[]');

    if (searchText?.trim().length) {
      return of(allAd.filter(item => item.title.includes(searchText) || item.description.includes(searchText)));
    }
    return of(allAd);
  }

  getSuccessAds(): Observable<any[]> {
    const allAd: any[] = JSON.parse(localStorage.getItem('Ads') || '[]');
    const successAds: any[] = allAd.filter(item => item.adStatus === 1);
    return of(successAds);
  }

  getOne(id: number): Observable<any> {
    const getAllAds: any[] = JSON.parse(localStorage.getItem('Ads') || '[]');
    const findAd = getAllAds.find(item => item.id == id);
    return of(findAd);
  }

  getMyAds(): Observable<any[]> {
    const user = JSON.parse(localStorage.getItem('UserData'));
    const allAd: any[] = JSON.parse(localStorage.getItem('Ads') || '[]');
    return of(allAd.filter(item => item.userId === user.id));
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

  delete(adId: number): Observable<any> {
    const allAd: any[] = JSON.parse(localStorage.getItem('Ads') || '[]');
    const findAdIndex = allAd.findIndex(item => item.id === adId);

    if (findAdIndex !== -1) {
      allAd.splice(findAdIndex, 1);
      localStorage.setItem('Ads', JSON.stringify(allAd));
      return of(true);
    }
  }
}
