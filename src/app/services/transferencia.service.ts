import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Transferencia } from '../models/transferencia.model';
import { Observable } from 'rxjs';

// É um metadata que posso invocar através do constructor. Injeção (injectable)
@Injectable({
  // prodider de input: ele está provido em algum modulo especifico
  providedIn: 'root'
})
export class TransferenciaService {
  private listaTransferencia: any[];
  private url = 'http://localhost:3000/transferencias'

  // HttpClient: ela prove métodos que faz a requisição para uma api rast. Requisição get, push, delete
  constructor(private httpClient: HttpClient) {
    this.listaTransferencia = []
   }

   get Transferencias() {
     return this.listaTransferencia
   }

   // retornar a propriedade get
   // Observable implementa o padrão de observador
   todos(): Observable<Transferencia[]>{
    //  vai fazer uma requisição get().
    // Ele vai me retornar um observable de alguma coisa
    // Agora ele me retorna um Transferencia, no lugar de observable
    return this.httpClient.get<Transferencia[]>(this.url);
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
