import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ServicioDeClima provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ServicioDeClima {
private direcionWeb='http://api.openweathermap.org/data/2.5/forecast/daily?'+
'id=3991347&appid=dfb9632bd86e64831b1bc3814bde6a75&units=metric'
  constructor(private http: Http) {
    console.log('Hello ServicioDeClima Provider');
  }
  getPronosticos(){
  	return this.http.get(this.direcionWeb)
  	.map(res=>res.json())
  }

}
