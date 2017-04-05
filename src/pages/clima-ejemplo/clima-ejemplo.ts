import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServicioDeClima } from '../../providers/servicio-de-clima';
/*
  Generated class for the ClimaEjemplo page.

  See http://ionicframework.com/dSocs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-clima-ejemplo',
  templateUrl: 'clima-ejemplo.html'
})
export class ClimaEjemploPage {

	pronosticos:any[];
	informacionCiudad;
  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
    public _serviciodeclima: ServicioDeClima) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClimaEjemploPage');

    this._serviciodeclima.getPronosticos()
    .subscribe(
    	(data:any[])=>{
          this.pronosticos = data.list;
          this.informacionCiudad = data.city;
           let contador=0;
           let fechahoy=new Date();
                for(let dia of this.pronosticos){
                dia.fecha=new Date();
                dia.fecha.setDate(dia.fecha.getDate()+contador)
                contador++;          
                 } 

          console.log('Pronosticos:')
          console.log(this.pronosticos);
          console.log('Ciudad:')
          console.log(this.informacionCiudad);
    	}, 
    	(err)=>{console.log(err);
    	 }
    	)
  }

}
