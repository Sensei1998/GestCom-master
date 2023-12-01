import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commandes-fournisseurs',
  templateUrl: './commandes-fournisseurs.component.html',
  styleUrls: ['./commandes-fournisseurs.component.scss']
})
export class CommandesFournisseursComponent implements OnInit{

  constructor(
    private router: Router
  ){}
  ngOnInit(): void {

  }
  nouvelleCmdFournisseur(): void{
    this.router.navigate(['nouvelleCmdFournisseur']);
  }
}
