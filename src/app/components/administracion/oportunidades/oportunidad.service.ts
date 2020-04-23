import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Oportunidad} from './oportunidad';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OportunidadService {

  private urlOportunidad = 'http://localhost:8080/api/oportunidades';

  constructor(private http: HttpClient) { }

  getOportunidad(): Observable<Oportunidad[]>{
    return this.http.get(this.urlOportunidad).pipe(
      map((response) => response as Oportunidad[])
    );
  }
}
