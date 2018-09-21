import {Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {PageEditorComponent} from './components/page-editor/page-editor.component';

export const appRoutes: Routes = [
  { path: 'pages/new', component: PageEditorComponent },
  { path: 'pages/:pageName', component: PageEditorComponent }
]
