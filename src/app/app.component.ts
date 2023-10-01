import { Component, OnInit } from '@angular/core';
import { Moeda } from './moeda';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  dolar: Moeda;
  euro: Moeda;
  libra: Moeda;
  iene: Moeda;

  constructor() {
    this.dolar = {
      compra: 0,
      venda: 0,
      variacao: 0,
      menorvalor: 0,
      maiorvalor: 0,
      ultimaatualizacao: new Date()
    };
    this.euro = {
      compra: 0,
      venda: 0,
      variacao: 0,
      menorvalor: 0,
      maiorvalor: 0,
      ultimaatualizacao: new Date()
    };
    this.libra = {
      compra: 0,
      venda: 0,
      variacao: 0,
      menorvalor: 0,
      maiorvalor: 0,
      ultimaatualizacao: new Date()
    };
    this.iene = {
      compra: 0,
      venda: 0,
      variacao: 0,
      menorvalor: 0,
      maiorvalor: 0,
      ultimaatualizacao: new Date()
    };
  }

  ngOnInit(): void {

  }

  formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

}
