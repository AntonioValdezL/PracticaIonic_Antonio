import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ServicioProducto} from '../../providers/servicio-producto'
import {ProductosPage} from '../productos/productos';
import {Producto} from '../productos/productoClass'
  /*Generated class for the FormaProducto page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-forma-producto',
  templateUrl: 'forma-producto.html'
})
export class FormaProductoPage {
  productos:Producto[];
   producto:Producto = new Producto();
  constructor(public ProductoService: ServicioProducto, public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormaProductoPage');
    this.ProductoService
  	.getProductos()
  	.subscribe(
  		(data:Producto[])=>{
        
  			this.productos = data;
        console.log(this.productos)
  		
  		},
  		(error)=>{},
  		);
  }

  CrearProducto(){
      this.ProductoService.addProducto(this.producto).subscribe(
        (data)=>{
        var funciono=data.funciono;
        if(funciono) {
          // redireccionar                    
          this.navCtrl.pop();        
          console.log(JSON.stringify(this.producto));
        }
      },
      (err)=>{}
      );

  }
}
