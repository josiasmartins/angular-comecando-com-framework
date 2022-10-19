import { TransferenciaService } from './services/transferencia.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  destino: number;
  valor: number;
  // não utiliza mais
  // transferencias: any[] = [];

  constructor(private service: TransferenciaService) {}

  // vai passar ele como parametro, então preciso passar ele como parâmetro
  // transferir($event): void {
  //   console.log($event);
  //   // this.destino = $event.destino;
  //   // this.valor = $event.valor;
  //   this.service.adicionar($event)
  // }


}
