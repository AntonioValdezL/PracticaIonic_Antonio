import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Pagina3Page } from '../pages/pagina3/pagina3';
import { ClimaEjemploPage } from '../pages/clima-ejemplo/clima-ejemplo';
import { ProductosPage } from '../pages/productos/productos';
import { ServicioDeClima } from '../providers/servicio-de-clima';
import { ServicioProducto } from '../providers/servicio-producto';
import {FormaProductoPage} from '../pages/forma-producto/forma-producto'
import {EditarProductoPage} from '../pages/editar-producto/editar-producto'

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
   Pagina3Page,
   ClimaEjemploPage,
   ProductosPage,
   FormaProductoPage,
   EditarProductoPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Pagina3Page,
    ClimaEjemploPage,
    ProductosPage,
    FormaProductoPage,
   EditarProductoPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, ServicioDeClima, ServicioProducto]
})
export class AppModule {}
