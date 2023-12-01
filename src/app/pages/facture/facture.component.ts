import { facture } from '@/model/facture.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '@services/api.service';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.scss']
})
export class FactureComponent implements OnInit{
  facture: facture[]=[{}];
  origin='';
  id=0;
  detail:any;

  constructor(
    private service: ApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){}

ngOnInit(): void {

  this.facture = this.getFacture();
console.log(this.facture)
  
  this.activatedRoute.paramMap.subscribe(param =>{
    if(param.get('id')){
      this.id = +param.get('id')!;
     this.detail = this.service.getFactureByClient(this.id);
    
      }
    })

  this.activatedRoute.data.subscribe(data => {
    this.origin = data.origin;
  });
}

getFacture(): facture[]{
  return this.service.getFacture();
  }


  saveClick(): void{
   
  }
  cancelClick(): void {
    
    this.router.navigate(['proFacture']);
    
  }


  nouveauFacture(): void{
    this.router.navigate(['nouveauFacture']);
  }

}







