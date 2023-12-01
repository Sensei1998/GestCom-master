import { article } from '@/model/article.model';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '@services/api.service';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.scss']
})
export class DetailArticleComponent implements OnInit{
  article: article[]=[{}];
  


  constructor(
    private service: ApiService
  ){}

ngOnInit(): void {
  this.article = this.getArticle();
  console.log(this.article)
}
getArticle(): article[]{
  return this.service.getArticle();
}



}
