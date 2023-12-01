import { commandeFournisseur } from '@/model/commande-fournisseur.model';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '@services/api.service';

@Component({
  selector: 'app-detail-bcmd-fns',
  templateUrl: './detail-bcmd-fns.component.html',
  styleUrls: ['./detail-bcmd-fns.component.scss']
})
export class DetailBcmdFnsComponent implements OnInit{
  commandeFournisseur: commandeFournisseur[]=[{}];


  constructor(
    private service: ApiService
  ){}

ngOnInit(): void {
  this.commandeFournisseur = this.getBcmdFournisseur();
  console.log(this.commandeFournisseur)
}
getBcmdFournisseur(): commandeFournisseur[]{
  return this.service.getBcmdFournisseur();
}

}
