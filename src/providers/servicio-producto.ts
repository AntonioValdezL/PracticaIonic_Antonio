import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ServicioProducto provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ServicioProducto {
private apiURL:string='http://localhost:49208/APIProducto/'
  constructor(public http: Http) {
    console.log('Hello ServicioProducto Provider');
  }
  public getProductos(){
  return this.http
  .get(this.apiURL+'getJsonList')
  .map(res=>res.json())
  }

  public addProducto(producto){
  return this.http
  .post(this.apiURL+'createProducto',producto)
  .map(res=>res.json())
  }

  public removeProductos(id){
  return this.http
  .post(this.apiURL+'borrarProducto/'+id, null)
  .map(res=>res.json())
  }

  public editarProducto(id){
    return this.http
    .get(this.apiURL+'editarProducto/'+id,null)
    .map(res=>res.json())
    

  }
  public editar(producto){
    return this.http
    .post(this.apiURL+'editar',producto)
    .map(res=>res.json())
    

  }

}
