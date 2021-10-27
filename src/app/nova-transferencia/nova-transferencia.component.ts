import { EventEmitter } from '@angular/core';
import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

  // output: mandar essses dados para quem invocou. Propaga o dados
  // através desse eventEmitter eu consigo propagar esse dado
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  transferir(): void {
    console.log('Solicitado nova transfêrencia');
    const valorEmitir = {valor: this.valor, destino: this.destino}
    // emit(): vai emitir um valor. Emitir esse evento
    this.aoTransferir.emit(valorEmitir)
    // após emitir, vai limpar o campo
    this.limparCampos();
  }

  limparCampos(): void {
    this.valor = 0;
    this.destino = 0;
  }
}
