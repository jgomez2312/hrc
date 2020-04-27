import { Component, OnInit } from '@angular/core';
import { Empresa } from '../inicio/empresa';
import { EmpresaService } from '../inicio/empresa.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  empresas: Empresa[];

  constructor(private empresaService: EmpresaService) { }

  ngOnInit(): void {
    //this.empresaService.getEmpresas().subscribe((empresas) => this.empresas = empresas);
    this.empresaService.getClientes().subscribe((empresas) => this.empresas = empresas);
  }

}
