import { commandeClient } from '@/model/commande-client.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '@services/api.service';


@Component({
  selector: 'app-nouvelle-cmd-client',
  templateUrl: './nouvelle-cmd-client.component.html',
  styleUrls: ['./nouvelle-cmd-client.component.scss']
})
export class NouvelleCmdClientComponent implements OnInit{
  origin='';

  CmdClientForm: FormGroup= this.fb.group({
    client: [[],Validators.required],
    createAt: [[],Validators.required],
    fraisTransport: [[],Validators.required],
    article: [[],Validators.required],
    remise: [[],Validators.required],
    totalRemise: [[],Validators.required],
    refPiece: [[],Validators.required],
    typePiece: [[],Validators.required],
    totalBIC: [[],Validators.required],
    totalHT: [[],Validators.required],
    totalTVA: [[],Validators.required],
    totalTTC: [[],Validators.required],
    netAPayer: [[],Validators.required],
   })

  constructor(
    private router: Router,
    private service: ApiService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.origin = data.origin;
    });
  }
  saveClick(): void{
    if(this.CmdClientForm.valid){
      let commandeClient:commandeClient = {
        client: this.CmdClientForm.get("client")?.value,
        createAt: this.CmdClientForm.get("createAt")?.value,
        fraisTransport: this.CmdClientForm.get("fraisTransport")?.value,
        article: this.CmdClientForm.get("article")?.value,
        remise: this.CmdClientForm.get("remise")?.value,
        totalRemise: this.CmdClientForm.get("totalRemise")?.value,
        refPiece: this.CmdClientForm.get("refPiece")?.value,
        typePiece: this.CmdClientForm.get("typePiece")?.value,
        totalBIC: this.CmdClientForm.get("totalBIC")?.value,
        totalHT: this.CmdClientForm.get("totalHT")?.value,
        totalTTC: this.CmdClientForm.get("totalTTC")?.value,
        totalTVA: this.CmdClientForm.get("totalTVA")?.value,
        netAPayer: this.CmdClientForm.get("netAPayer")?.value,
        
      }
      //console.log(commandeClient);
      this.service.addCmdClient(commandeClient);
      
     }
   setTimeout(() =>{ 
    this.previousState()
   },2000)
   

  }

  previousState(){
    window.history.back();
  }
  cancelClick(): void {
    
       this.router.navigate(['commandes-clients']);
    
  }
}
