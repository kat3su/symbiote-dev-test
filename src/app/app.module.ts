import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.route';

import { AppComponent } from './app.component';
import { PageListComponent } from './components/page-list/page-list.component';
import { PageEditorComponent } from './components/page-editor/page-editor.component';


@NgModule({
  declarations: [
    AppComponent,
    PageListComponent,
    PageEditorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
