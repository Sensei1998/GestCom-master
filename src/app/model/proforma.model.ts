import { article } from "./article.model";
import { client } from "./client.model";

export interface proforma {
    id?: number;
    numProforma?: number;
    client?: client;
    telephone?:client;
    article?: article;
    dateProforma?: string;
    fraisTransport?: number;
    netAPayer?:number;
    totalHT?: number;
    totalTTC?:number;
    totalTVA?:number;
    remise?:number;
    totalRemise?:number;
}