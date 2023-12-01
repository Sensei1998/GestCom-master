import { article } from '@/model/article.model';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '@services/api.service';

@Component({
  selector: 'app-detail-detail',
  templateUrl: './detail-detail.component.html',
  styleUrls: ['./detail-detail.component.scss']
})
export class DetailDetailComponent implements OnInit{
  article: article[]=[{}];
  router: any;


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
