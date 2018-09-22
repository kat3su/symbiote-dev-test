import {Component, OnInit} from '@angular/core';
import {Page} from './models/page';
import {PageService} from './services/page.service';
import {AuthService} from './services/auth.service';
import {User} from './models/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  activeUser: User;
  pages: Page[];

  constructor(private pageService: PageService, public authService: AuthService, private router: Router) {}
  ngOnInit() {
    this.authService.getActiveUser().subscribe(user => {
      this.activeUser = user;
    });
    this.pageService.getPages().subscribe(pages => {
      this.pages = pages;
    });
  }
  openPage(page: Page) {
    this.router.navigate(['pages', page.title]);
  }
}
