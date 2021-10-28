import { Injectable } from '@angular/core';

// É um metadata que posso invocar através do constructor. Injeção (injectable)
@Injectable({
  // prodider de input: ele está provido em algum modulo especifico
  providedIn: 'root'
})
export class TransferenciaService {
  private listaTransferencia: any[];

  constructor() {
    this.listaTransferencia = []
   }

   get Transferencias() {
     return this.listaTransferencia
   }

   // vou receber uma transferencia como parâmetro
   adicionar(transferencia: any): void {
    // pre operarion
    // está descontruindo esse objeto/evento. Se estar chegando duas propriedades
    // refatorando o código
    this.hidratar(transferencia)
    this.listaTransferencia.push(transferencia);
   };

   private hidratar(transferencia: any): void {
    transferencia.data = new Date();
   }
}
