import { Component, LOCALE_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MenuComponent } from './shared/components/menu/menu.component';
import { SharedModule } from './shared/shared.module';
import localeEsEA from '@angular/common/locales/es-EA';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEsEA);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, MenuComponent, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    {provide: LOCALE_ID, useValue: 'es-EA'}
  ]
})
export class AppComponent {
  title = 'Pipes-App';
}
