import { NavController, NavParams } from 'ionic-angular/umd';
import { Component, OnInit } from '@angular/core';
//daler soporte para recibir datos por la URL 
import 'rxjs/add/operator/switchMap';
import {ServicioProducto } from '../../providers/servicio-producto'
import {ProductosPage } from '../productos/productos'

@Component({
  selector: 'app-editar-productos',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {
   productos:ProductosPage[];


  constructor(
    private NavController: NavController,
    private NavParams: NavParams,
    private _ServicioProducto:ServicioProducto
  ) { }

  ngOnInit() {
    console.log(this.NavParams.get('id'));
  }

}
