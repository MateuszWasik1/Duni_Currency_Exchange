import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class CurrencyService {
    constructor() { }

    GetCurrencies(){
        //rates based on 26.05.2024
        let ListOfCurrencies = [
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

        return ListOfCurrencies;
    }
}