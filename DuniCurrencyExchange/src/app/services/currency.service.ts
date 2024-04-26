import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class CurrencyService {
    constructor() { }

    GetCurrencies(){
        let ListOfCurrencies = [
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

        return ListOfCurrencies;
    }
}