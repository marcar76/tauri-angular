import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-orders',   
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
   standalone: true,
  imports: [RouterLink, TranslateModule]
})
export class OrdersComponent  {
  constructor() {}

  ngOnInit(): void {
    console.log('OrdersComponent INIT');
}
}
