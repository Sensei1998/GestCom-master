import { facture } from '@/model/facture.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '@services/api.service';

@Component({
  selector: 'app-detail-facture-clt',
  templateUrl: './detail-facture-clt.component.html',
  styleUrls: ['./detail-facture-clt.component.scss']
})
export class DetailFactureCltComponent implements OnInit{
  facture: facture[]=[{}];


  constructor(
    private service: ApiService
  ){}

ngOnInit(): void {
  this.facture = this.getFacture();
  console.log(this.facture)
}
getFacture(): facture[]{
  return this.service.getFacture();
}


}
