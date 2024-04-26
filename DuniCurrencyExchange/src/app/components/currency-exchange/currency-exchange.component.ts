import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-currency-exchange',
  templateUrl: './currency-exchange.component.html',
  styleUrls: ['./currency-exchange.component.scss']
})
export class CurrencyExchangeComponent implements OnInit {

  public ShowResult: boolean = false;

  public SelectedAmount: any;
  public SelectedFromCurrency: any;
  public SelectedToCurrency: any;

  public ExchangeResult: number = 0;

  public form: FormGroup = new FormGroup({
    Amount: new FormControl( 0.00, { validators: [Validators.min(0)] }),
  });

  public ListOfCurrencies = [
    {
        "CurrencyID": 1,
        "CurrencyName": "EUR",
        "Rates": {
            "PLN": 0.2314,
        }
    },
    {
        "CurrencyID": 2,
        "CurrencyName": "GBP",
        "Rates": {
            "PLN": 0.1982,
        }
    },
    {
      "CurrencyID": 3,
      "CurrencyName": "CHF",
      "Rates": {
          "PLN": 0.2263,
      }
    },
    {
      "CurrencyID": 4,
      "CurrencyName": "USD",
      "Rates": {
          "PLN": 0.2481,
      }
    },
    {
      "CurrencyID": 5,
      "CurrencyName": "PLN",
      "Rates": {
          "EUR": 4.32,
          "GBP": 5.05,
          "CHF": 4.42,
          "USD": 4.04,
          "PLN": 1,
      }
    },
  ];

  constructor() { }

  ngOnInit(): void {

    this.form.valueChanges.subscribe((form: any) => {
      this.SelectedAmount = form.Amount;
      console.log(form)
      console.log(form.Amount)
      console.log(this.SelectedFromCurrency)
      console.log(this.SelectedToCurrency)

      console.log(form.Amount * this.SelectedToCurrency.Rates[this.SelectedFromCurrency.CurrencyName])
      console.log(this.SelectedToCurrency.Rates[this.SelectedFromCurrency.CurrencyName])

      // this.ExchangeResult = form.Amount * this.SelectedToCurrency.Rates[this.SelectedFromCurrency.CurrencyName]
      this.ConvertCurrencies();
    });
  }

  public FromCurrencyChange = (currency: any) => {
    console.log(currency)
    console.log(currency.value)
    console.log(currency.value.CurrencyName)
    this.SelectedFromCurrency = currency.value
    //if(this.SameCurrency())
    this.ConvertCurrencies();

  }

  public ToCurrencyChange = (currency: any) => {
    console.log(currency)
    console.log(currency.value)
    console.log(currency.value.CurrencyName)
    this.SelectedToCurrency = currency.value
    //if(this.SameCurrency())
    this.ConvertCurrencies();
  }

  public SameCurrency = () => this.SelectedFromCurrency == this.SelectedToCurrency;

  public ConvertCurrencies = () => {
    console.log(this.SelectedAmount)
    console.log(this.SelectedFromCurrency)
    console.log(this.SelectedToCurrency)
    this.ShowResult = true //naprawić
    // if(this.SelectedFromCurrency != undefined && this.SelectedToCurrency != undefined)
      this.ExchangeResult = this.SelectedAmount * this.SelectedToCurrency.Rates[this.SelectedFromCurrency.CurrencyName]
  }
} 