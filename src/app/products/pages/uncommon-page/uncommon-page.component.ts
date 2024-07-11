import { Component } from '@angular/core';
import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';
import { CommonModule } from '@angular/common';
import { Observable, interval, tap } from 'rxjs';


@Component({
  selector: 'app-uncommon-page',
  standalone: true,
  imports: [PrimeNgModule, CommonModule, ],
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {


  public name:string='Santiago';
  public gender: 'male'|'female'='male';
  public invitationMap = {
    male:'verlo',
    female: 'verla'
  }

  changeClient():void{
    this.name='Rebeca';
    this.gender='female';
  }


  public clients = ["maria",  "pedro",  "fernando",  "diego",  "laura"];
  public clientsMap  = {
    '=0': 'Actualmente no tenemos ningun cliente esperando',
    '=1': 'Actualmente tenemos 1 cliente esperando',
    'other': 'Actualmente tenemos # clientes esperando'

  }
  deleteClient() {
    if(this.clients.length===0) return;
    this.clients.pop();
    }


    // KeyValue Pipe
  public person = {
    name: 'Fernando',
    age: 36,
    address: 'Ottawa, Canada',
  }

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(1000).pipe(
    tap( value => console.log('tap:', value ) ),
  );

  public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve( 'Tenemos data en la promesa.' );
      console.log( 'Tenemos data en la promesa.' );
      this.person.name = 'Otro nombre'
    }, 2500);
  })

}
