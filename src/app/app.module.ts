import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Import Class*/
import { HttpClientModule } from '@angular/common/http';
import { ROUTING } from './app.routing';

/* Import Servicios */
import { ClienteService } from './components/administracion/clientes/cliente.service';

/* Import Modules */
import { AppComponent } from './app.component';
import { NavigatorComponent } from './components/shared/navigator/navigator.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ClientesComponent } from './components/administracion/clientes/clientes.component';
import { ProveedoresComponent } from './components/administracion/proveedores/proveedores.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { NavbarTopComponent } from './components/shared/navbar-top/navbar-top.component';
import { AdministracionComponent } from './components/administracion/administracion.component';
import { RecursosHumanosComponent } from './components/recursos-humanos/recursos-humanos.component';
import { FacturacionComponent } from './components/facturacion/facturacion.component';
import { ContabilidadComponent } from './components/contabilidad/contabilidad.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { InicioComponent } from './components/administracion/inicio/inicio.component';
import { OportunidadesComponent } from './components/administracion/oportunidades/oportunidades.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    FooterComponent,
    HomeComponent,
    ClientesComponent,
    ProveedoresComponent,
    EmpresaComponent,
    NavbarTopComponent,
    AdministracionComponent,
    RecursosHumanosComponent,
    FacturacionComponent,
    ContabilidadComponent,
    ConfiguracionComponent,
    ProyectosComponent,
    InicioComponent,
    OportunidadesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ROUTING
  ],
  providers: [
    ClienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
