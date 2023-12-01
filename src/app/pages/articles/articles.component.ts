import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NouvelArticleComponent } from '@pages/page-articles/nouvel-article/nouvel-article.component';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  constructor(
    private router: Router
  ){}
  ngOnInit(): void {

  }
  nouvelFournisseur(): void{
    this.router.navigate(['']);NouvelArticleComponent
  }
}