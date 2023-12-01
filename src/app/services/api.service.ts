import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { article } from '@/model/article.model';
import { client } from '@/model/client.model';
import { fournisseur } from '@/model/fournisseur.model';
import { facture } from '../model/facture.model';
import { commandeFournisseur } from '@/model/commande-fournisseur.model';
import { commandeClient } from '@/model/commande-client.model';
import { user } from '@/model/administrateur.model';
import { proforma } from '@/model/proforma.model';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
  [x: string]: any;
   
    
    originList: article[]=[
        {
            id: 1,
            reference: 'bf',
            designation: 'AMOXICILINE',
            typeArticle: 'medicament' ,
            lot:'2023A1',
            packaging:'AE22',
            category: 'REACTIF LABO/BACT',
            remise: 12,
            quantityIn: 54,
            quantityOut: 78,
            oneSellPrice: 2000,
            expiredDate: '04/05/2023',  
        },
        {
            id: 2,
            reference: 'ci',
            designation: 'EFFERALGAN',
            typeArticle: 'medicament' ,
            lot:'2023A8',
            packaging:'AE24',
            category: 'REACTIF LABO/CART',
            remise: 12,
            quantityIn: 54,
            quantityOut: 78,
            oneSellPrice: 2000,
            expiredDate: '04/09/2023',  
        }
    ]

    origineList: client[]=[
        {
        id: 1,
        nom: 'KABORE',
        prenom: 'Pierre',
        numero: 77889944,
        adresse: 'BP133',
        ville: 'Ouagadougou',
        pays: 'Burkina Faso',
        email: 'kabore@gmail.com',
        },
        {
            id: 2,
            nom: 'OUEDRAOGO',
            prenom: 'Claire',
            numero: 64952133,
            adresse: 'BP132',
            ville: 'Ouagadougou',
            pays: 'Burkina Faso',
            email: 'claire@gmail.com',
            }

    ]

    originaList: fournisseur[]=[
        {
        id: 1,
        nom: 'SAWADOGO Paul',
        fax: '25963871',
        telephone: 77889944,
        adresse: 'BP133',
        ville: 'Ouagadougou',
        ifu: 'bf77',
        rccm: 'bfo77',
        email: 'sawadogo@gmail.com',
        },
        {
            id: 2,
            nom: 'ZIDA',
            fax: 'Marie',
            telephone: 64952133,
            adresse: 'BP132',
            ville: 'Ouagadougou',
            ifu: 'ci77',
            rccm: 'cio77',
            email: 'marie@gmail.com',
            }

    ]

     origigi: facture[]=[
         {
           id: 1,
           numeroFacture: 111,
           nature: 'espece',
           fraisTransport: 1000,
           netAPayer:100000,
           createAt:'15/09/2023',
           totalHT: 5000,
           solde:'soldé',
           totalTTC:2000,
           remise:1500,
           totalRemise:7500,
           client: {
               id: 1,
               nom: 'KABORE',
               prenom: 'Pierre',
            },
           telephone: {
            numero: 77889944,
           },
           article:{
            designation: 'AMOXICILINE',
            reference: 'bf',
           } 
                 
             
         },
         {
            id: 2,
            numeroFacture: 192,
            nature: 'chèque',
            fraisTransport: 1500,
            netAPayer:105900,
            createAt:'27/09/2023',
            totalHT: 6000,
            solde:'non soldé',
            totalTTC:3000,
            remise:1000,
            totalRemise:8200,
            client: {
                id: 2,
                nom: 'OUEDRAOGO',
              prenom: 'Claire',
             },
            telephone: {
             numero: 77889944,
            },
            article:{
             designation: 'SPASFON',
             reference: 'CI',
            } 
                  
              
          }

         
             
    ]
    origigigi: commandeFournisseur[]=[
        {
         id: 1,
         fournisseur: 'Laboratoir CAPRIN',
         createAt:'04/06/2023',
         fraisTransport:2000,
         article: 'médicaments',
         remise:5000,
         totalRemise:10000,
         refPiece: 'PBS159',
         typePiece: 'Facture',
         totalBIC: 12000,
         totalHT: 10000,
         totalTVA: 5000,
         totalTTC: 15000,
         netAPayer: 30000,
        },
        {
            id: 2,
            fournisseur: 'Laboratoire LAPAIX',
            createAt:'04/06/2023',
            fraisTransport:2000,
            article: 'Seringue',
            remise:5000,
            totalRemise:10000,
            refPiece: 'PBS159',
            typePiece: 'Facture',
            totalBIC: 12000,
            totalHT: 10000,
            totalTVA: 5000,
            totalTTC: 15000,
            netAPayer: 30000,
           
            }

    ]
    origigigigi: commandeClient[]=[
        {
         id: 1,
         client: 'Clinique Notre Dame',
         createAt:'04/06/2023',
         fraisTransport:2000,
         article: 'médicaments',
         remise:5000,
         totalRemise:10000,
         refPiece: 'PBS159',
         typePiece: 'Facture',
         totalBIC: 12000,
         totalHT: 10000,
         totalTVA: 5000,
         totalTTC: 15000,
         netAPayer: 30000,
        },
        {
            id: 2,
            client: 'Clinique LAPAIX',
            createAt:'16/06/2023',
            fraisTransport:2000,
            article: 'Seringue',
            remise:6000,
            totalRemise:11000,
            refPiece: 'PBS299',
            typePiece: 'Facture',
            totalBIC: 12000,
            totalHT: 15000,
            totalTVA: 5000,
            totalTTC: 10000,
            netAPayer: 25000,
           
            }

    ]
    origigigigigi: user[]=[
        {
         id: 1,
         nom: 'BONKOUNGOU Ali',
         nomUtilisateur: 'ali1',
         telephone: 77889944,
         email: 'ali@gmail.com',
         password:'12ab3c',
        },
        {
            id: 2,
            nom: 'BAZIER Latifa',
            nomUtilisateur: 'latifa3',
            telephone: 75926418,
            email: 'latifa@gmail.com',
            password:'95lb3p',
            }

    ]
    origigigigigigi: proforma[]=[
        {
          id: 1,
          numProforma: 111,
          fraisTransport: 1000,
          netAPayer:100000,
          dateProforma:'26/09/2023',
          totalHT: 5000,
          totalTTC:2000,
          remise:1500,
          totalRemise:7500,    
          client: {
            id:1,
            nom: 'KABORE',
            prenom: 'Pierre',
         },
         telephone: {
            numero: 77889944,
        },
            article:{
            
             designation: 'AMOXICILINE',
             reference: 'bf',
            }      
            
        },
        {
            id: 2,
            numProforma: 131,
            fraisTransport: 1500,
            netAPayer:150000,
            dateProforma:'28/09/2023',
            totalHT: 5000,
            totalTTC:2000,
            remise:1500,
            totalRemise:7500,    
            client: {
                id:2,
              nom: 'OUEDRAOGO',
              prenom: 'Claire',
           },
           telephone: {
            numero: 64952133,
          },
              article:{
               designation: 'SPARADRA',
               reference: 'bf',
              }      
              
          }

    ]
    
url="http://127.0.0.1:8000/api/stock/"
  
    constructor(private http: HttpClient) {}


    getArticle(): article[]{
        this.http.get(this.url + 'articles').subscribe(
           data => {
            console.log('article : ',data);
           }
        )
        return this.originList;
    }

    getClient(): client[]{
        return this.origineList;
    }
    getFournisseur(): fournisseur[]{
        return this.originaList;
    }
     getFacture(): facture[]{
         return this.origigi;
     }
     getBcmdFournisseur(): commandeFournisseur[]{
        return this.origigigi;
    }
    getBcmdClient(): commandeFournisseur[]{
        return this.origigigigi;
    }
    getUser(): user[]{
        return this.origigigigigi;
    }
    getProforma(): proforma[]{
        return this.origigigigigigi;
    }
      
    private getId():number{
        let idMAx = 0;
        this.origineList.forEach(client =>{
          if(client.id && client.id > idMAx){
            idMAx = client.id;
          }
        });

        return idMAx +1;
      }


    private getIdFournisseur():number{
        let idMAx = 0;
        this.originaList.forEach(fournisseur =>{
            if(fournisseur.id && fournisseur.id > idMAx){
              idMAx = fournisseur.id;
            }
          });

        return idMAx +1;
      }

    private getIdArticle():number{
        let idMAx = 0;
        this.originList.forEach(article =>{
            if(article.id && article.id > idMAx){
              idMAx = article.id;
            }
          });

        return idMAx +1;
      }

    private getIdCmdClient():number{
        let idMAx = 0;
        this.origigigigi.forEach(commandeClient =>{
            if(commandeClient.id && commandeClient.id > idMAx){
              idMAx = commandeClient.id;
            }
          });

        return idMAx +1;
      }

    private getIdCmdFns():number{
        let idMAx = 0;
        this.origigigi.forEach(commandeFournisseur =>{
            if(commandeFournisseur.id && commandeFournisseur.id > idMAx){
              idMAx = commandeFournisseur.id;
            }
          });

        return idMAx +1;
      }


    addClient(client: client):void{
        client.id = this.getId();
        this.origineList.push(client);
       }

     addFournisseur(fournisseur: fournisseur):void{
        fournisseur.id = this.getIdFournisseur();
        this.originaList.push(fournisseur);
       }

     addArticle(article: article):void{
        article.id = this.getIdArticle();
        this.originList.push(article);
       }

     addCmdClient(commandeClient: commandeClient):void{
        commandeClient.id = this.getIdCmdClient();
        this.origigigigi.push(commandeClient);
       }

     addCmdFns(commandeFournisseur: commandeFournisseur):void{
        commandeFournisseur.id = this.getIdCmdFns();
        this.origigigi.push(commandeFournisseur);
       }





     getProformaByClient(id: number) {
        let proforma = this.origigigigigigi.filter(value => value.client.id === id)!;
        return proforma;
      }

    getFactureByClient(id: number) {
        let facture = this.origigi.filter(value => value.client.id === id)!;
        return facture;
      }

}
