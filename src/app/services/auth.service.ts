import { Injectable } from '@angular/core';
import {User} from '../models/user';
import {Observable, Observer, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private activeUser: User;
  private activeUserObserver: Observer<User>;
  constructor() {}

  getActiveUser() {
    return new Observable<User>(observer => {
      this.activeUserObserver = observer;
      this.activeUserObserver.next(this.activeUser);
    });
  }

  login(user): Observable<any> {
    if (this.authenticate(user)) {
      this.activeUser = user;
      this.activeUserObserver.next(this.activeUser);
      return of({
        success: true
      });
    }
    return of({
      success: false,
      error: 'Invalid username & password'
    });
  }

  private authenticate(user: User) {
    return user.username === user.password;
  }
}
