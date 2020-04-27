import { Component, OnInit } from '@angular/core';
import { Empresa } from '../inicio/empresa';
import { EmpresaService } from '../inicio/empresa.service';

@Component({
  selector: 'app-oportunidades',
  templateUrl: './oportunidades.component.html'
})
export class OportunidadesComponent implements OnInit {

  empresas: Empresa[];
  constructor(private empresaService: EmpresaService) { }

  ngOnInit(): void {
    this.empresaService.getOportunidades().subscribe((empresas) => this.empresas = empresas);
  }

}
