import { Component,EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { client } from '@/model/client.model';
import { ApiService } from '@services/api.service';


@Component({
  selector: 'app-nouvel-client',
  templateUrl: './nouvel-client.component.html',
  styleUrls: ['./nouvel-client.component.scss']
})
export class NouvelClientComponent implements OnInit{

   origin='';
   ClientForm: FormGroup= this.fb.group({
    nom: [[],Validators.required],
    prenom: [[],Validators.required],
    numero: [[],Validators.required],
    adresse: [[],Validators.required],
    ville: [[],Validators.required],
    pays: [[],Validators.required],
    email: [[],Validators.required],
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
    if(this.ClientForm.valid){
      let client:client = {
        nom: this.ClientForm.get("nom")?.value,
        adresse: this.ClientForm.get("adresse")?.value,
        prenom: this.ClientForm.get("prenom")?.value,
        ville: this.ClientForm.get("ville")?.value,
        pays: this.ClientForm.get("pays")?.value,
        email: this.ClientForm.get("email")?.value,
        numero: this.ClientForm.get("numero")?.value
      }
      //console.log(client);
      this.service.addClient(client);
      
     }
   setTimeout(() =>{ 
    this.previousState()
   },2000)
   

  }

  previousState(){
    window.history.back();
  }

  cancelClick(): void {
    
       this.router.navigate(['clients']);
    
  }

}
