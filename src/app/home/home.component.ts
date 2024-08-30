import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list'
import {RouterModule} from "@angular/router";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatGridListModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
