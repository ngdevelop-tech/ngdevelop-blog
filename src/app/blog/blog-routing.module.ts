import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';

import {BlogComponent} from './blog.component';

const routes: Routes = [
  {
    path: '',
    component: BlogListComponent,
    pathMatch: 'full'
  },
  {
    path: ':slug',
    component: BlogComponent,
  },
  // {
  //   path: '**',
  //   component: BlogListComponent,
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}

