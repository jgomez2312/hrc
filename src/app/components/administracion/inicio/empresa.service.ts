import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Empresa} from './empresa';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private urlEmpresas = 'http://localhost:8080/api/empresas';
  private urlClientes = 'http://localhost:8080/api/clientes';
  private urlProveedor = 'http://localhost:8080/api/proveedores';
  private urlOportunidad = 'http://localhost:8080/api/oportunidades';

  constructor(private http: HttpClient) {
  }

  getEmpresas(): Observable<Empresa[]> {
    return this.http.get(this.urlEmpresas).pipe(
      map( response => response as Empresa[])
    );
  }
  getClientes(): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(this.urlClientes).pipe(
      map(response => response as Empresa[])
    );
  }
  getProveedores(): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(this.urlProveedor).pipe(
      map(response => response as Empresa[])
    );
  }
  getOportunidades(): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(this.urlOportunidad).pipe(
      map(response => response as Empresa[])
    );
  }

}
