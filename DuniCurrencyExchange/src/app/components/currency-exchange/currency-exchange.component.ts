import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PatternValidator } from 'src/app/helpers/forms-validation';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-currency-exchange',
  templateUrl: './currency-exchange.component.html',
  styleUrls: ['./currency-exchange.component.scss']
})
export class CurrencyExchangeComponent implements OnInit {

  public CurrencyData: Array<any> = [];

  public ShowResult: boolean = false;
  public IsError: boolean = false;

  public SelectedAmount: any = 0;
  public SelectedFromCurrency: any = undefined;
  public SelectedToCurrency: any = undefined;

  public ExchangeResult: number = 0;
  public ExchangeReversedResult: number = 0;
  public ExchangeRate: number = 0;

  public form: FormGroup = new FormGroup({
    Amount: new FormControl( 0.00, { validators: [
      Validators.min(0),
      PatternValidator(new RegExp("(?=.*[0-9])"), {
        requiresDigit: true
      }),
    ] }),
  });

  constructor(public currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.CurrencyData = this.currencyService.GetCurrencies();

    this.form.valueChanges.subscribe((form: any) => {
      this.SelectedAmount = form.Amount;
      this.ConvertCurrencies();
    });
  }

  public FromCurrencyChange = (currency: any) => {
    this.SelectedFromCurrency = currency.value;
    this.ConvertCurrencies();

  }

  public ToCurrencyChange = (currency: any) => {
    this.SelectedToCurrency = currency.value;
    this.ConvertCurrencies();
  }
 
  public ConvertCurrencies = () => {
    if(this.SelectedFromCurrency != undefined && this.SelectedToCurrency != undefined){
      this.ShowResult = true;
      
      this.ExchangeResult = this.SelectedAmount * this.SelectedToCurrency.Rates[this.SelectedFromCurrency.CurrencyName];
      this.ExchangeReversedResult = this.SelectedFromCurrency.Rates[this.SelectedToCurrency.CurrencyName];
      this.ExchangeRate = this.SelectedToCurrency.Rates[this.SelectedFromCurrency.CurrencyName];

      this.IsError = this.SelectedFromCurrency?.CurrencyName == 'PLN' && this.SelectedAmount > 10000
    }
  }
} 