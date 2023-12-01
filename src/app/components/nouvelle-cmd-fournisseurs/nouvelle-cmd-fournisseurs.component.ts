import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '@services/api.service';
import { commandeFournisseur } from '@/model/commande-fournisseur.model';

@Component({
  selector: 'app-nouvelle-cmd-fournisseurs',
  templateUrl: './nouvelle-cmd-fournisseurs.component.html',
  styleUrls: ['./nouvelle-cmd-fournisseurs.component.scss']
})
export class NouvelleCmdFournisseursComponent implements OnInit{
  origin='';

  CmdFournisseurForm: FormGroup= this.fb.group({
    fournisseur: [[],Validators.required],
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
    if(this.CmdFournisseurForm.valid){
      let commandeFournisseur:commandeFournisseur = {
        fournisseur: this.CmdFournisseurForm.get("fournisseur")?.value,
        createAt: this.CmdFournisseurForm.get("createAt")?.value,
        fraisTransport: this.CmdFournisseurForm.get("fraisTransport")?.value,
        article: this.CmdFournisseurForm.get("article")?.value,
        remise: this.CmdFournisseurForm.get("remise")?.value,
        totalRemise: this.CmdFournisseurForm.get("totalRemise")?.value,
        refPiece: this.CmdFournisseurForm.get("refPiece")?.value,
        typePiece: this.CmdFournisseurForm.get("typePiece")?.value,
        totalBIC: this.CmdFournisseurForm.get("totalBIC")?.value,
        totalHT: this.CmdFournisseurForm.get("totalHT")?.value,
        totalTTC: this.CmdFournisseurForm.get("totalTTC")?.value,
        totalTVA: this.CmdFournisseurForm.get("totalTVA")?.value,
        netAPayer: this.CmdFournisseurForm.get("netAPayer")?.value,
        
      }
      //console.log(commandeClient);
      this.service.addCmdFns(commandeFournisseur);
      
     }
   setTimeout(() =>{ 
    this.previousState()
   },2000)
   
  }
  previousState(){
    window.history.back();
  }
  cancelClick(): void {
    
       this.router.navigate(['commandes-fournisseurs']);
    
  }
}
