import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',

  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: true,
  imports: [RouterLink, TranslateModule],
})
export class DashboardComponent {
  constructor() {}

  ngOnInit(): void {
    console.log('DashboardComponent INIT');
  }
}
