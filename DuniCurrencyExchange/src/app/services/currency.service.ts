import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class CurrencyService {
    constructor() { }

    GetCurrencies(){
        let ListOfCurrencies = [
            {
                "CurrencyName": "EUR",
                "Rates": {
                    "PLN": 0.69,
                    "GBP": 1.1,
                }
            }
        ];
    }
}