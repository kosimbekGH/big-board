import { Injectable } from '@angular/core';
import { Observable, of, ReplaySubject, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  currentUser$ = new ReplaySubject<any>(1);

  constructor(private router: Router) {
    this.currentUser$.next(JSON.parse(localStorage.getItem('UserData') || '{}'));
  }

  register(formData: any): Observable<any> {
    const users: any[] = this.getUsers();

    const checkUser = users.some(item => item.phoneNumber === formData.phoneNumber);
    if (!checkUser) {
      users.push(formData);
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('UserData', JSON.stringify(formData));
      this.currentUser$.next(formData);
      return of(formData);
    }

    return throwError('Данный пользователь уже зарегистрирован');
  }

  login(formData: any): Observable<any> {
    const users: any[] = this.getUsers();

    // Проверим на существования пользователя
    const getUser = users.find(item => item.phoneNumber === formData.phoneNumber);

    if (!getUser) {
      return throwError('Такого пользователя не существует');
    }

    if (getUser.password === formData.password) {
      localStorage.setItem('UserData', JSON.stringify(getUser));
      this.currentUser$.next(getUser);
      return of(getUser);
    }

    return throwError('Неверный пароль');
  }

  getUsers(): any[] {
    return JSON.parse(localStorage.getItem('users') || '[]');
  }

  isAuth(): boolean {
    return !!localStorage.getItem('UserData');
  }

  logOut(): void {
    localStorage.removeItem('UserData');
    this.router.navigate(['/login']);
  }
}
