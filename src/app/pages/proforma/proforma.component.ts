import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '@services/api.service';

@Component({
  selector: 'app-proforma',
  templateUrl: './proforma.component.html',
  styleUrls: ['./proforma.component.scss']
})
export class ProformaComponent implements OnInit{

  origin='';
  id=0;
  detail:any;

  constructor(
    private service: ApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){}

ngOnInit(): void {

  this.activatedRoute.paramMap.subscribe(param =>{
    if(param.get('id')){
      this.id = +param.get('id')!;
     this.detail = this.service.getProformaByClient(this.id);
    
      }
    })

  this.activatedRoute.data.subscribe(data => {
    this.origin = data.origin;
  });

}

  saveClick(): void{
   
  }
  cancelClick(): void {
   this.router.navigate(['proFacture']);
  }

  nouveauProforma(): void{
    this.router.navigate(['nouveauProforma']);
  }

}
