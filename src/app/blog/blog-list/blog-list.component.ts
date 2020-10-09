import { Component, OnInit } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogs$ = this.scullyService.allRoutes$;

  constructor(private scullyService: ScullyRoutesService) { }

  ngOnInit(): void {
  }

}
