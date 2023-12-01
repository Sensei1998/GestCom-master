import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fournisseurs',
  templateUrl: './fournisseurs.component.html',
  styleUrls: ['./fournisseurs.component.scss']
})
export class FournisseursComponent implements OnInit {
  constructor(
    private router: Router
  ){}
  ngOnInit(): void {

  }
  nouvelFournisseur(): void{
    this.router.navigate(['nouvelFournisseur']);
  }
}
