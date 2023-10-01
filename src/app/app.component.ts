import { Component, OnInit } from '@angular/core';
import { Moeda } from './moeda';
import axios from 'axios';

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
    	axios.get('https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,GBP-BRL,JPY-BRL').then(response => {
        this.dolar.compra = response.data.USDBRL.bid;
        this.dolar.venda = response.data.USDBRL.ask;
        this.dolar.variacao = response.data.USDBRL.pctChange;
        this.dolar.menorvalor = response.data.USDBRL.low;
        this.dolar.maiorvalor = response.data.USDBRL.high;
        this.dolar.ultimaatualizacao = new Date(response.data.USDBRL.create_date);

        this.euro.compra = response.data.EURBRL.bid;
        this.euro.venda = response.data.EURBRL.ask;
        this.euro.variacao = response.data.EURBRL.pctChange;
        this.euro.menorvalor = response.data.EURBRL.low;
        this.euro.maiorvalor = response.data.EURBRL.high;
        this.euro.ultimaatualizacao = new Date(response.data.EURBRL.create_date);

        this.libra.compra = response.data.GBPBRL.bid;
        this.libra.venda = response.data.GBPBRL.ask;
        this.libra.variacao = response.data.GBPBRL.pctChange;
        this.libra.menorvalor = response.data.GBPBRL.low;
        this.libra.maiorvalor = response.data.GBPBRL.high;
        this.libra.ultimaatualizacao = new Date(response.data.GBPBRL.create_date);

        this.iene.compra = response.data.JPYBRL.bid;
        this.iene.venda = response.data.JPYBRL.ask;
        this.iene.variacao = response.data.JPYBRL.pctChange;
        this.iene.menorvalor = response.data.JPYBRL.low;
        this.iene.maiorvalor = response.data.JPYBRL.high;
        this.iene.ultimaatualizacao = new Date(response.data.JPYBRL.create_date);
      });
  }

  formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

}
