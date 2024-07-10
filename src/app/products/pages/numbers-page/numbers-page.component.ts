import { Component } from '@angular/core';
import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-numbers-page',
  standalone: true,
  imports: [PrimeNgModule, CommonModule],
  templateUrl: './numbers-page.component.html',
  styleUrl: './numbers-page.component.css'
})
export class NumbersPageComponent {

  public totalSells:number = 256732.556;
  public percent:number = 0.4856;
}
