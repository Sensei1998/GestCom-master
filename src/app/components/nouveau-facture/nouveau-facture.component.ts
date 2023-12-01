import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nouveau-facture',
  templateUrl: './nouveau-facture.component.html',
  styleUrls: ['./nouveau-facture.component.scss']
})
export class NouveauFactureComponent implements OnInit{
  origin='';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.origin = data.origin;
    });
  }
  saveClick(): void{
   
  }
  cancelClick(): void {
    
       this.router.navigate(['facture']);
    
  }
}
