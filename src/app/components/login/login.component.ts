import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  error: string;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    if (!this.user.username || !this.user.password) {
      this.error = 'Please enter username & password';
      return;
    }
    this.authService.login(this.user).subscribe(response => {
      if (response.success) {
        this.router.navigate(['/']);
        this.error = null;
      } else {
        this.error = response.error;
      }
    });
  }

}
