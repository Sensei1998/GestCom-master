import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

    constructor(
      private router: Router
    ) {}
  
    ngOnInit(): void {
      
    }
  
    nouvelleCategory(): void{
     this.router.navigate(['nouvelleCategory']);
    }
  
  }
