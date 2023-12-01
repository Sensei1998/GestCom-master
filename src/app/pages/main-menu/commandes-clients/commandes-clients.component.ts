import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commandes-clients',
  templateUrl: './commandes-clients.component.html',
  styleUrls: ['./commandes-clients.component.scss']
})
export class CommandesClientsComponent implements OnInit{
  constructor(
    private router: Router
  ){}
  ngOnInit(): void {

  }
  nouvelleCmdClient(): void{
    this.router.navigate(['nouvelleCmdClient']);
  }

}
