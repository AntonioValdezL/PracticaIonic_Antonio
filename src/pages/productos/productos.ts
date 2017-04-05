import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Producto}from './productoClass';
import {ServicioProducto} from '../../providers/servicio-producto';
import {EditarProductoPage} from '../editar-producto/editar-producto';
import {FormaProductoPage} from '../forma-producto/forma-producto';
/*
  Generated class for the Productos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-productos',
  templateUrl: 'productos.html'
})
export class ProductosPage {
 productos:Producto[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public servicioproducto:ServicioProducto) {}

  ionViewDidLoad() {
   this.servicioproducto
  	.getProductos()
  	.subscribe(
  		(data:Producto[])=>{
        
  			this.productos = data;
        console.log(this.productos)
  		
  		},
  		(error)=>{},
  		);
  }
  borrarProducto(borrarProducto){
    this.servicioproducto.removeProductos(borrarProducto).subscribe(
      (eliminarProcuto)=>{
        var funciono=eliminarProcuto;
        if(funciono!=null){
          this.ionViewDidLoad();
          alert("El Producto se elimino Correctamente");
        }
      },
      (err)=>{alert("Error, no se pudo eliminar el Producto")}
      )
  }
  editarProducto(id){
    this.navCtrl.push(EditarProductoPage,id);
  }
  crear(){
    this.navCtrl.push(FormaProductoPage)
  }
  

}
