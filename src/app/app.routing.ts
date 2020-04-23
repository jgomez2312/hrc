import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {AdministracionComponent} from './components/administracion/administracion.component';
import {ConfiguracionComponent} from './components/configuracion/configuracion.component';
import {ContabilidadComponent} from './components/contabilidad/contabilidad.component';
import {EmpresaComponent} from './components/empresa/empresa.component';
import {FacturacionComponent} from './components/facturacion/facturacion.component';
import {ProyectosComponent} from './components/proyectos/proyectos.component';
import {RecursosHumanosComponent} from './components/recursos-humanos/recursos-humanos.component';
import {ClientesComponent} from './components/administracion/clientes/clientes.component';
import {ProveedoresComponent} from './components/administracion/proveedores/proveedores.component';
import {InicioComponent} from './components/administracion/inicio/inicio.component';
import {OportunidadesComponent} from './components/administracion/oportunidades/oportunidades.component';


const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'administracion', component: AdministracionComponent, children: [
      {path: '', component: InicioComponent},
      {path: 'inicio-admin', component: InicioComponent},
      {path: 'clientes', component: ClientesComponent},
      {path: 'proveedores', component: ProveedoresComponent},
      {path: 'oportunidades', component: OportunidadesComponent}
    ]},
  {path: 'configuracion', component: ConfiguracionComponent},
  {path: 'contabilidad', component: ContabilidadComponent},
  {path: 'empresa', component: EmpresaComponent},
  {path: 'facturacion', component: FacturacionComponent},
  {path: 'proyectos', component: ProyectosComponent},
  {path: 'recursos-humanos', component: RecursosHumanosComponent},

  {path: '**', pathMatch: 'full', redirectTo: ''}
];

export const ROUTING = RouterModule.forRoot(ROUTES);


