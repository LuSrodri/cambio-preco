import { Component, OnInit } from '@angular/core';
import { Moeda } from '../moeda';
import axios from 'axios';

@Component({
  selector: 'app-moedas',
  templateUrl: './moedas.component.html',
  styleUrls: ['./moedas.component.css']
})
export class MoedasComponent implements OnInit {

  moedas: Moeda[] = [];

  ngOnInit(): void {
    	axios.get('https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,GBP-BRL,JPY-BRL,BTC-BRL').then(response => {
        const data = response.data;

        Object.keys(data).forEach((moeda) => {
          this.moedas.push({
            nome: data[moeda].name.replace('/Real Brasileiro', ''),
            compra: data[moeda].bid,
            venda: data[moeda].ask,
            variacao: data[moeda].pctChange,
            menorvalor: data[moeda].low,
            maiorvalor: data[moeda].high,
            ultimaatualizacao: new Date(data[moeda].create_date),
          });
        });        
      });
  }

  formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

}
