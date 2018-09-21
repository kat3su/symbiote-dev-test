import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PageService} from '../../services/page.service';
import {Page} from '../../models/page';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss']
})
export class PageListComponent implements OnInit {
  @Input()
  pages: Page[];
  @Output()
  select: EventEmitter<Page> = new EventEmitter<Page>();

  constructor() { }

  ngOnInit() {}

  selectPage(page: Page) {
    this.select.emit(page);
  }
}
