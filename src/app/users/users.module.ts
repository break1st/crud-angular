import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    TableModule,
    SharedModule
  ]
})
export class UsersModule { }
