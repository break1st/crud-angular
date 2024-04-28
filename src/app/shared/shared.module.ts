import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { EditUserModalComponent } from './components/edit-user-modal/edit-user-modal.component';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { AddUserModalComponent } from './components/add-user-modal/add-user-modal.component';
import { AddCidadeModalComponent } from './components/add-cidade-modal/add-cidade-modal.component';
import { EditCidadeModalComponent } from './components/edit-cidade-modal/edit-cidade-modal.component';
import { DeleteCidadeDialogComponent } from './components/delete-cidade-dialog/delete-cidade-dialog.component';


@NgModule({
  declarations: [
    ErrorDialogComponent,
    EditUserModalComponent,
    DeleteDialogComponent,
    AddUserModalComponent,
    AddCidadeModalComponent,
    EditCidadeModalComponent,
    DeleteCidadeDialogComponent
  ],
  imports: [
    CommonModule,
    DialogModule,
    DropdownModule,
    ConfirmDialogModule,
    FormsModule
  ],
  exports: [
    ErrorDialogComponent,
    EditUserModalComponent,
    DeleteDialogComponent,
    AddUserModalComponent,
    AddCidadeModalComponent,
    EditCidadeModalComponent,
    DeleteCidadeDialogComponent
  ],
  providers: []
})
export class SharedModule { }
