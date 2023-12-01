

export interface commandeClient {
    id?: number;
    client?: string;
    createAt?:string;
    article?:string;
    fraisTransport?:number;
    remise?:number;
    totalRemise?:number;
    refPiece?: string;
    typePiece?: string;
    totalBIC?: number;
    totalHT?: number;
    totalTVA?: number;
    totalTTC?: number;
    netAPayer?: number;
}