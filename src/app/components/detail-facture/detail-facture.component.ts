import { facture } from '@/model/facture.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '@services/api.service';

@Component({
  selector: 'app-detail-facture',
  templateUrl: './detail-facture.component.html',
  styleUrls: ['./detail-facture.component.scss']
})
export class DetailFactureComponent implements OnInit{

  facture: facture[]=[{}];


  constructor(
    private service: ApiService,
    private router: Router,
   
  ){}

ngOnInit(): void {
 
  this.facture = this.getFacture();
  console.log(this.facture)
}
getFacture(): facture[]{
  return this.service.getFacture();
}

}
