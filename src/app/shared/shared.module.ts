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


@NgModule({
  declarations: [
    ErrorDialogComponent,
    EditUserModalComponent,
    DeleteDialogComponent,
    AddUserModalComponent
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
    AddUserModalComponent
  ],
  providers: []
})
export class SharedModule { }
