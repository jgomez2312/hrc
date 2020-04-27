import { Component, OnInit } from '@angular/core';

import { Empresa } from '../inicio/empresa';

@Component({
  selector: 'app-form-empresas',
  templateUrl: './form.empresas.component.html'
})
export class FormEmpresasComponent implements OnInit {

  empresa: Empresa = new Empresa();

  constructor() { }

  ngOnInit(): void {
  }

  public create():void{
    console.log('Click');
    console.log(this.empresa);
  }
}
