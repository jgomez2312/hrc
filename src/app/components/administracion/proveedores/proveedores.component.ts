import { Component, OnInit } from '@angular/core';
import { Empresa } from '../inicio/empresa';
import { EmpresaService } from '../inicio/empresa.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html'
})
export class ProveedoresComponent implements OnInit {

  empresas: Empresa[];

  constructor(private empresaService: EmpresaService) { }

  ngOnInit(): void {
    //this.empresaService.getEmpresas().subscribe((empresas) => this.empresas = empresas);
    this.empresaService.getProveedores().subscribe((empresas) => this.empresas = empresas);
  }
}
