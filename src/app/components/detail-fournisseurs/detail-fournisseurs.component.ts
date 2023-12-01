import { fournisseur } from '@/model/fournisseur.model';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '@services/api.service';

@Component({
  selector: 'app-detail-fournisseurs',
  templateUrl: './detail-fournisseurs.component.html',
  styleUrls: ['./detail-fournisseurs.component.scss']
})
export class DetailFournisseursComponent implements OnInit {
  fournisseur: fournisseur[]=[{}];


  constructor(
    private service: ApiService
  ){}

ngOnInit(): void {
  this.fournisseur = this.getFournisseur();
  console.log(this.fournisseur)
}
getFournisseur(): fournisseur[]{
  return this.service.getFournisseur();
}
}
