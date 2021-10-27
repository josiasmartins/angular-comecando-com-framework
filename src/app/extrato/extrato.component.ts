import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  // ela vai permitir criar uma property bind
  @Input() transferencias: any[];
  constructor() { }

  ngOnInit(): void {
  }

}
