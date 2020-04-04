import { Component } from '@angular/core';
import * as products from './products.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Summa FED Test';
  productsList: any = (products as any).default;
  constructor(){}
}

