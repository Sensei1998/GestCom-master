import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '@services/api.service';

@Component({
  selector: 'app-pro-facture',
  templateUrl: './pro-facture.component.html',
  styleUrls: ['./pro-facture.component.scss']
})
export class ProFactureComponent implements OnInit{
  origin='';
  id=0;
  
  constructor(
    private service: ApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(param =>{
      if(param.get('id')){
        this.id = +param.get('id')!;
       
      }
    })

    this.activatedRoute.data.subscribe(data => {
      this.origin = data.origin;
    });
  }

  detailFacture(): void{
    this.router.navigate(['facture',this.id]);
   }
   detailProforma(): void{
    this.router.navigate(['proforma', this.id]);
   }


  
  cancelClick(): void {
    
       this.router.navigate(['clients']);
    
  }


}
