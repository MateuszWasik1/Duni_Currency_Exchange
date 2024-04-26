import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-currency-exchange',
  templateUrl: './currency-exchange.component.html',
  styleUrls: ['./currency-exchange.component.scss']
})
export class CurrencyExchangeComponent implements OnInit {

  public ExchangeText: string = "";

  public form: FormGroup = new FormGroup({
    Amount: new FormControl( 0.00, { validators: [] }),
    From: new FormControl( "", { validators: [] }),
    To: new FormControl( "", { validators: [] }),
  });

  public ListOfCurrencies = [
    {
        "CurrencyID": 1,
        "CurrencyName": "EUR",
        "Rates": {
            "PLN": 0.69,
            "GBP": 1.1,
        }
    },
    {
        "CurrencyID": 2,
        "CurrencyName": "GBP",
        "Rates": {
            "PLN": 1.69,
            "EUR": 2.1,
        }
    },
];

  constructor() { }

  ngOnInit(): void {
  }

}
