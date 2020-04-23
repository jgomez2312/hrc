import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Proveedor} from './proveedor';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  private urlProveedor = 'http://localhost:8080/api/proveedores'
  constructor(private http: HttpClient) { }

  getProveedores(): Observable<Proveedor[]>{
    return this.http.get(this.urlProveedor).pipe(
      map( response => response as Proveedor[])
    );
  }
}
