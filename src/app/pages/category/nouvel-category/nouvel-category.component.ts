import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nouvel-category',
  templateUrl: './nouvel-category.component.html',
  styleUrls: ['./nouvel-category.component.scss']
})
export class NouvelCategoryComponent implements OnInit {
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
    this.router.navigate(['category'])
  }
}
