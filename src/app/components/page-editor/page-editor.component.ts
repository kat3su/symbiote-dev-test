import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Page} from '../../models/page';
import {PageService} from '../../services/page.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-page-editor',
  templateUrl: './page-editor.component.html',
  styleUrls: ['./page-editor.component.scss']
})
export class PageEditorComponent implements OnInit {
  @Input()
  page: Page;
  error: string;
  editorMode: boolean;

  constructor(private route: ActivatedRoute, private router: Router, private pageService: PageService) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      // Opening an existing page
      if (param['pageName']) {
        this.page = this.pageService.getPageByName(param['pageName']);
        this.editorMode = false;
      } else { // New Page
        this.page = new Page();
        this.editorMode = true;
      }
    });
  }

  save() {
    const success = this.pageService.addPage(this.page);
    if (success) {
      this.router.navigate(['pages', this.page.title]);
    } else {
      this.displayError('Duplicated page name. Please choose a different name');
    }
  }

  private displayError(errorMessage: string) {
    this.error = errorMessage;
  }
}
