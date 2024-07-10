import { Component } from '@angular/core';
import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-basics-page',
  standalone: true,
  imports: [PrimeNgModule, CommonModule],
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = 'santiago';
  public nameUpper: string = 'SANTIAGO';
  public fullName:string= 'sAntIAgO AbrIL';

  public customDate: Date = new Date();


}
