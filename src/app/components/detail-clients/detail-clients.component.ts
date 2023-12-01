import { client } from '@/model/client.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '@services/api.service';

@Component({
  selector: 'app-detail-clients',
  templateUrl: './detail-clients.component.html',
  styleUrls: ['./detail-clients.component.scss']
})
export class DetailClientsComponent implements OnInit{
  client: client[]=[{}];


  constructor(
    private service: ApiService,
    private router: Router
  ){}

ngOnInit(): void {
  this.client = this.getClient();
  console.log(this.client)
}
getClient(): client[]{
  return this.service.getClient();
}
proFacture(): void{
 this.router.navigate(['proFacture']);
}
}
