import { user } from '@/model/administrateur.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '@services/api.service';

@Component({
  selector: 'app-detail-utilisateur',
  templateUrl: './detail-utilisateur.component.html',
  styleUrls: ['./detail-utilisateur.component.scss']
})
export class DetailUtilisateurComponent implements OnInit{
  user: user[]=[{}];


  constructor(
    private service: ApiService,
    private router: Router
  ){}

ngOnInit(): void {
  this.user = this.getUser();
  console.log(this.user)
}
getUser(): user[]{
  return this.service.getUser();
}


}
