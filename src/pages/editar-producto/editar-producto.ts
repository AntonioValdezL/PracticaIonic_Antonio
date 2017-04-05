import {Metadata} from 'ionic-native/dist/esm';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ServicioProducto} from '../../providers/servicio-producto';
import {Producto} from '../../pages/productos/productoClass';
import {ProductosPage} from '../../pages/productos/productos'
/*
  Generated class for the EditarProducto page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-editar-producto',
  templateUrl: 'editar-producto.html'
})
export class EditarProductoPage {
productos:Producto[];
Producto: Producto= new Producto();
text:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public servicioproducto:ServicioProducto ) {}

  ionViewDidLoad() {
      var productoID = this.navParams.data;
      this.servicioproducto.editarProducto(productoID).subscribe(
        (data:Producto[])=>{
              this.Producto = data;              
              console.log(JSON.stringify(this.Producto));
            },
            (error)=>{},
            );
    
    console.log('ionViewDidLoad EditarProductoPage');
  }
 EditarProducto(){
    this.servicioproducto.editar(this.Producto).subscribe(
      (data)=>{        
        if(data=!null) {
               
          console.log(JSON.stringify(this.Producto));
          alert('Editado Exitoso XD')
          this.navCtrl.push(ProductosPage)     
        }
      },
      (error)=>{}
    );
  }
}
