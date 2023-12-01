import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.scss']
})
export class PageDetailComponent implements OnInit{
  origin='';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){}

ngOnInit(): void {
  this.activatedRoute.data.subscribe(data => {
    this.origin = data.origin;
  });

}

  saveClick(): void{
   
  }
  cancelClick(): void {
    
   this.router.navigate(['article']);
  }


}
