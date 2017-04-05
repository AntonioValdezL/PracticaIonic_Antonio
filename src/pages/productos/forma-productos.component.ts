import { Component, OnInit } from '@angular/core';
import {ServicioProducto} from '../../providers/servicio-producto';
import {Producto} from '../productos/productoClass';

@Component({
  selector: 'app-forma-productos',
  templateUrl: './forma-productos.component.html',
  styleUrls: ['./forma-productos.component.css']
})
export class FormaProductosComponent implements OnInit {
  nuevoProducto: Producto= new Producto();
  constructor( 

    private _ServicioProductoServise:ServicioProducto,


 
    ) {}

  ngOnInit() {
  	
  	
  }

  guardarProducto(){
    this._ServicioProductoServise.addProducto(this.nuevoProducto).subscribe(
      (data)=>{
        var funciono=data.funciono;
        if(funciono) {
          // redireccionar
         
          console.log(JSON.stringify(this.nuevoProducto));
        }
      },
      (err)=>{}
      );

  }



  imprimirNuevoProducto(){
  	 console.log(JSON.stringify(this.nuevoProducto));
  }


}
