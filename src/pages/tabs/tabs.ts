import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { Pagina3Page } from '../pagina3/pagina3';
import { ClimaEjemploPage } from '../clima-ejemplo/clima-ejemplo';
import { ProductosPage } from '../productos/productos';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = AboutPage;
  tab3Root: any = ContactPage;
  tab4Root: any = Pagina3Page;
  tab5Root: any = ClimaEjemploPage;
  tab6Root: any = ProductosPage;
  constructor() {

  }
}
