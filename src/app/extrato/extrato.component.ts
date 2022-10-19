import { TransferenciaService } from './../services/transferencia.service';
import { Component, OnInit, Input } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  // ela vai permitir criar uma property bind
  // @Input()
  transferencias: any[];

  constructor(private service: TransferenciaService) { }

  ngOnInit(): void {
    // this.transferencias = this.service.Transferencias;
    // subscribe(): vai inscrever nessa resposta do método
    // quando a resposta desse método retornar um sucesso
    this.service.todos().subscribe((transferencias: Transferencia[]) => {
      // é uma coleção, então posso imprimir ele no formato de tabela
      console.table(transferencias);
      // a transferencia do component vai receber o do parametro
      this.transferencias = transferencias
    });
  }

}
