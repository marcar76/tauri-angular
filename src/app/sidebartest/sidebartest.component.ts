 
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-sidebartest',   
  templateUrl: './sidebartest.component.html',
  styleUrl: './sidebartest.component.scss',
  standalone: true,
  imports: [RouterLink, TranslateModule]
})
export class SidebartestComponent {

}


 