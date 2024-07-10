import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule } from 'primeng/menu';
import { MenubarModule} from 'primeng/menubar'
import {FieldsetModule} from 'primeng/fieldset';
import {PanelModule} from 'primeng/panel';
import {CardModule} from 'primeng/card'

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    //MenuModule,
    MenubarModule,
    FieldsetModule,
    PanelModule,
    CardModule,


  ]
})
export class PrimeNgModule { }
