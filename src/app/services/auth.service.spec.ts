import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import {User} from '../models/user';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

  it('should log user in with correct credential', inject([AuthService], (service: AuthService) => {
    const user = new User('user', 'user');
    service.login(user).subscribe(response => {
      expect(response.success).toEqual(true);
    });
  }));

  it('should return error with incorrect credential', inject([AuthService], (service: AuthService) => {
    // Invalid username & password
    const user = new User('user', 'pass');
    service.login(user).subscribe(response => {
      expect(response.success).toEqual(false);
      expect(response.error).toBeDefined();
    });
  }));
});
