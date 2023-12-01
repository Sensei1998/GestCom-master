import { Component, OnInit } from '@angular/core';
import { ApiService } from '@services/api.service';

@Component({
  selector: 'app-detail-bcmd-clients',
  templateUrl: './detail-bcmd-clients.component.html',
  styleUrls: ['./detail-bcmd-clients.component.scss']
})
export class DetailBcmdClientsComponent implements OnInit{
  //article: article[]=[{}];


  constructor(
    private service: ApiService
  ){}

ngOnInit(): void {
 // this.article = this.getArticle();
 // console.log(this.article)
}
//getArticle(): article[]{
 // return this.service.getArticle();
//}

}
