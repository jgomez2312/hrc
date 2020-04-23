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

  constructor(private http: HttpClient) {
  }

  getEmpresas(): Observable<Empresa[]> {
    return this.http.get(this.urlEmpresas).pipe(
      map( response => response as Empresa[])
    );
  }

}
