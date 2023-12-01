import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nouveau-proforma',
  templateUrl: './nouveau-proforma.component.html',
  styleUrls: ['./nouveau-proforma.component.scss']
})
export class NouveauProformaComponent implements OnInit{
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
    
       this.router.navigate(['proforma']);
    
  }
}
