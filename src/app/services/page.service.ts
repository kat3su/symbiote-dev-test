import { Injectable } from '@angular/core';
import {Page} from '../models/page';
import {Observable, Observer} from 'rxjs';
import {StorageService} from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  pages: Observable<Page[]>;
  pagesObserver: Observer<Page[]>;
  constructor(private storageService: StorageService) { }

  getPages(): Observable<Page[]> {
    if (!this.pages) {
      this.pages = Observable.create(observer => {
        this.pagesObserver = observer;
        this.emitPages();
      });
    }
    return this.pages;
  }

  addPage(newPage: Page): boolean {
    const pages = this.getPageFromStorage();
    // Validate Page
    const duplicatedPage = pages.find(page => {
      return page.title === newPage.title;
    });
    if (duplicatedPage) {
      return false;
    }
    // Add new page to storage
    pages.push(newPage);
    this.storageService.set('pages', pages);
    // Emit page list with newly added page
    this.emitPages();
    return true;
  }

  getPageByName(pageName: string): Page {
    const pageData = this.getPageFromStorage().find(page => {
      return page.title === pageName;
    });
    return new Page(pageData);
  }

  private emitPages() {
    if (this.pagesObserver) {
      // Convert data to Page objects
      const pages = this.getPageFromStorage().map(pageData => new Page(pageData));
      this.pagesObserver.next(pages);
    }
  }

  private getPageFromStorage() {
    return this.storageService.get('pages') || [];
  }
}
