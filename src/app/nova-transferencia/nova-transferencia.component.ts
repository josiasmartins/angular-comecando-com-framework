import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { EventEmitter } from '@angular/core';
import { Component, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

  // output: mandar essses dados para quem invocou. Propaga o dados
  // através desse eventEmitter eu consigo propagar esse dado
  @Output() aoTransferir = new EventEmitter<any>();

  constructor(
    private service: TransferenciaService,
    private router: Router
  ) {}

  valor: number;
  destino: number;

  transferir(): void {
    console.log('Solicitado nova transfêrencia');
    const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino}
    // emit(): vai emitir um valor. Emitir esse evento
    // this.aoTransferir.emit(valorEmitir)

    // o método adicionar retorna um observable, ele pode dar um subscribe();
    // quando preciso manipular algum dado da tela, deixar ele no método subscribe()
    this.service.adicionar(valorEmitir).subscribe(
      resultado => {
        console.log(resultado);
        this.limparCampos();
        // Duas formas de navegar com router: navigate() e navigateUrl()
        // com o Router, tem acesso ao método navigate(). Pede um array de comandos
        // navigateUrl: só precisa do path em string
        // this.router.navigate(['extrato'])
        this.router.navigateByUrl('extrato')
    },
    // utilizado a segunda função do método subscribe. Ele mostra o erro
    (error) => console.error(error)
    );

    // após emitir, vai limpar o campo
    // this.limparCampos();
  }

  limparCampos(): void {
    this.valor = 0;
    this.destino = 0;
  }
}
