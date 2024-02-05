import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  private _isOwner = new BehaviorSubject<boolean>(false);
  isOwner$ = this._isOwner.asObservable();

  constructor() {
    this._isOwner.next(localStorage.getItem('isOwner') === 'true');
  }

  setUserType(userType: string) {
    if (userType === 'owner') {
      localStorage.setItem('isOwner', 'true');
      this._isOwner.next(true);
    } else if (userType === 'user') {
      localStorage.setItem('isOwner', 'false');
      this._isOwner.next(false);
    }
  }
}
