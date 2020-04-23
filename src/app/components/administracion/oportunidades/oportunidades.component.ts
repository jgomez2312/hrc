import { Component, OnInit } from '@angular/core';
import {Oportunidad} from './oportunidad';
import {OportunidadService} from './oportunidad.service';

@Component({
  selector: 'app-oportunidades',
  templateUrl: './oportunidades.component.html'
})
export class OportunidadesComponent implements OnInit {

  oportunidad: Oportunidad[];
  constructor(private oportunidadService: OportunidadService) { }

  ngOnInit(): void {
    this.oportunidadService.getOportunidad().subscribe((oportunidad) => this.oportunidad = oportunidad);
  }

}
