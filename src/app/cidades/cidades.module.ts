import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';

import { SharedModule } from '../shared/shared.module';
import { CidadesRoutingModule } from './cidades-routing.module';
import { CidadesComponent } from './cidades/cidades.component';

@NgModule({
  declarations: [
    CidadesComponent
  ],
  imports: [
    CommonModule,
    CidadesRoutingModule,
    TableModule,
    SharedModule
  ]
})
export class CidadesModule { }
