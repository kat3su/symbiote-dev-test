import { Injectable } from '@angular/core';
import {User} from '../models/user';
import {Observable, of, ReplaySubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private activeUser: User;
  private activeUserStream: ReplaySubject<User>;

  constructor() {
    this.activeUserStream = new ReplaySubject<User>(1);
    this.activeUserStream.next(this.activeUser);
  }

  getActiveUser() {
    return this.activeUserStream;
  }

  login(user): Observable<any> {
    if (this.authenticate(user)) {
      this.activeUser = user;
      this.activeUserStream.next(this.activeUser);
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
