import { commandeFournisseur } from '@/model/commande-fournisseur.model';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '@services/api.service';

@Component({
  selector: 'app-detail-cmd-fns',
  templateUrl: './detail-cmd-fns.component.html',
  styleUrls: ['./detail-cmd-fns.component.scss']
})
export class DetailCmdFnsComponent implements OnInit{

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



