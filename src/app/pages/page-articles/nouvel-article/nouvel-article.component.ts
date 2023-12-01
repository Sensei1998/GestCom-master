import { article } from '@/model/article.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '@services/api.service';

@Component({
  selector: 'app-nouvel-article',
  templateUrl: './nouvel-article.component.html',
  styleUrls: ['./nouvel-article.component.scss']
})
export class NouvelArticleComponent implements OnInit{
  origin='';

  ArticleForm: FormGroup= this.fb.group({
    reference: [[], Validators.required],
    designation: [[], Validators.required],
    typeArticle: [[], Validators.required],
    packaging: [[], Validators.required],
    category: [[], Validators.required],
    remise: [[], Validators.required],
    quantityIn: [[], Validators.required],
    quantityOut: [[], Validators.required],
    oneSellPrice: [[], Validators.required],
    expiredDate: [[], Validators.required],
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
    if(this.ArticleForm.valid){
      let article:article = {
        reference: this.ArticleForm.get("reference")?.value,
        designation: this.ArticleForm.get("designation")?.value,
        typeArticle: this.ArticleForm.get("typeArticle")?.value,
        packaging: this.ArticleForm.get("packaging")?.value,
        category: this.ArticleForm.get("category")?.value,
        remise: this.ArticleForm.get("remise")?.value,
        quantityIn: this.ArticleForm.get("quantityIn")?.value,
        quantityOut: this.ArticleForm.get("quantityOut")?.value,
        oneSellPrice: this.ArticleForm.get("oneSellPrice")?.value,
        expiredDate: this.ArticleForm.get("expiredDate")?.value,

      }
      //console.log(fournisseur);
      this.service.addArticle(article);
      
     }
   setTimeout(() =>{ 
    this.previousState()
   },2000)
   
  }

  previousState(){
    window.history.back();
  }

  cancelClick(): void {
    
       this.router.navigate(['sub-articles-1']);
    
  }
}
