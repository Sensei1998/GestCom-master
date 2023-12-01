import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'app-category',
    templateUrl: './utilisateur.component.html',
    styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent implements OnInit {

    constructor(
      private router: Router
    ) {}
  
    ngOnInit(): void {
      
    }
  
    nouvelUtilisateur(): void{
     this.router.navigate(['nouvelUtilisateur']);
    }
  
  }
