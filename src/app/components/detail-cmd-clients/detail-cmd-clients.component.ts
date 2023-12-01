import { commandeClient } from '@/model/commande-client.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '@services/api.service';

@Component({
  selector: 'app-detail-cmd-clients',
  templateUrl: './detail-cmd-clients.component.html',
  styleUrls: ['./detail-cmd-clients.component.scss']
})
export class DetailCmdClientsComponent implements OnInit {
  
  commandeClient: commandeClient[]=[{}];


  constructor(
    private service: ApiService,
    private activatedRoute: ActivatedRoute
  ){}

ngOnInit(): void {
  

  this.commandeClient = this.getBcmdClient();
  console.log(this.commandeClient)
}

getBcmdClient(): commandeClient[]{
  return this.service.getBcmdClient();
}


}
