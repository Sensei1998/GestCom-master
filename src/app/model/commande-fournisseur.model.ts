export interface commandeFournisseur {
    id?: number;
    fournisseur?: string;
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