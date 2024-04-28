import { Component, OnInit } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-currrencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.scss']
})
export class CurrenciesComponent implements OnInit {

  public CurrencyData: Array<any> = [];

  constructor(public currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.CurrencyData = this.currencyService.GetCurrencies();
  }
} 