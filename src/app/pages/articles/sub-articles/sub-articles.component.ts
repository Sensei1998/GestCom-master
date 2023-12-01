import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './sub-articles.component.html',
  styleUrls: ['./sub-articles.component.scss']
})
export class SubArticlesComponent implements OnInit {

  constructor(
    private router: Router

    ) 
    {}

  ngOnInit(): void {}

  nouvelArticle() : void {
  this.router.navigate (['nouvelarticle']);
  }

}
