import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyExchangeComponent } from './components/currency-exchange/currency-exchange.component';

const routes: Routes = [
  {
    path: 'currency-exchange',
    component: CurrencyExchangeComponent
  },
  {
    path: '**',
    component: CurrencyExchangeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
