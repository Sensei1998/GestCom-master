import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '@services/api.service';
import { fournisseur } from '@/model/fournisseur.model';

@Component({
  selector: 'app-nouvel-fournisseur',
  templateUrl: './nouvel-fournisseur.component.html',
  styleUrls: ['./nouvel-fournisseur.component.scss']
})
export class NouvelFournisseurComponent implements OnInit{
 
  origin='';
  FournisseurForm: FormGroup= this.fb.group({
    nom: [[], Validators.required],
    fax: [[], Validators.required],
    telephone: [[], Validators.required],
    adresse: [[], Validators.required],
    ville: [[], Validators.required],
    ifu: [[], Validators.required],
    rccm: [[], Validators.required],
    email: [[], Validators.required],
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
    if(this.FournisseurForm.valid){
      let fournisseur:fournisseur = {
        nom: this.FournisseurForm.get("nom")?.value,
        adresse: this.FournisseurForm.get("adresse")?.value,
        fax: this.FournisseurForm.get("fax")?.value,
        ville: this.FournisseurForm.get("ville")?.value,
        ifu: this.FournisseurForm.get("ifu")?.value,
        email: this.FournisseurForm.get("email")?.value,
        telephone: this.FournisseurForm.get("telephone")?.value
      }
      //console.log(fournisseur);
      this.service.addFournisseur(fournisseur);
      
     }
   setTimeout(() =>{ 
    this.previousState()
   },2000)
   

  }

  previousState(){
    window.history.back();
  }
  cancelClick(): void {
    this.router.navigate(['fournisseurs'])
  }
}
