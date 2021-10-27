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
  transferencias: any[] = [];

  // vai passar ele como parametro, então preciso passar ele como parâmetro
  transferir($event): void {
    console.log($event);
    // this.destino = $event.destino;
    // this.valor = $event.valor;
    // pre operarion
    // está descontruindo esse objeto/evento. Se estar chegando duas propriedades
    const transferencia = {...$event, data: new Date()}
    // refatorando o código
    this.transferencias.push(transferencia);
  }


}
