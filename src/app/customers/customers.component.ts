 
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
@Component({
    selector: 'app-customers',   
    templateUrl: './customers.component.html',
    styleUrl: './customers.component.scss',
    standalone: true,
  imports: [RouterLink, TranslateModule]
})
export class CustomersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('CustomersComponent INIT');
   }

}
