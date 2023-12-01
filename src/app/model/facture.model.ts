import { article } from "./article.model";
import { client } from "./client.model";

export interface facture {
    id?: number;
    numeroFacture?: number;
    article?: article;
    client?: client;
    telephone?: client;
    nature?: string;
    solde?: string;
    fraisTransport?: number;
    createAt?:string;
    netAPayer?:number;
    totalHT?: number;
    totalTTC?:number;
    remise?:number;
    totalRemise?:number;
}