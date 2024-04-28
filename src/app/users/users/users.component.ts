import { Component } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

import { ICidade } from '../../cidades/model/cidade';
import { CidadesService } from '../../cidades/services/cidades.service';
import { IUser } from '../model/user';
import { UsersService } from './../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

  constructor(
    private usersService: UsersService,
    private cidadesService: CidadesService
  ) {
    this.users$ = this.usersService.list()
    .pipe(
      catchError((error) => {
        console.error(error);
        this.onError('Erro ao carregar usuários');
        return of([]);
      })
    );

    this.cidades$ = this.cidadesService.list()
    .pipe(
      catchError((error) => {
        console.error(error);
        this.onError('Erro ao carregar cidades');
        return of([]);
      })
    );
  }

  users$: Observable<IUser[]>;
  cidades$: Observable<ICidade[]>;
  userToEdit: IUser | null = null;
  userIdToDelete: number | null = null;

  visibleErrorDialog: boolean = false;
  messageErrorDialog: string = '';

  visibleEditUserModal: boolean = false;

  visibleDeleteUserDialog: boolean = false;

  visibleAddUserModal: boolean = false;

  refresh() {
    this.users$ = this.usersService.list()
    .pipe(
      catchError((error) => {
        console.error(error);
        this.onError('Erro ao carregar usuários');
        return of([]);
      })
    );
  }

  onError(message: string) {
    this.messageErrorDialog = message;
    this.visibleErrorDialog = true;
  }

  onClickEditUser(user: IUser) {
    this.userToEdit = user;
    this.visibleEditUserModal = false;
    this.setVisibleEditUserModal(true);
  }

  setVisibleEditUserModal(visible: boolean) {
    setTimeout(() => {
      this.visibleEditUserModal = visible;
    }, 1);
  }

  onClickDeleteUser(user: IUser) {
    this.userIdToDelete = user.id;
    this.visibleDeleteUserDialog = false;
    this.setVisibleDeleteUserDialog(true);
  }

  setVisibleDeleteUserDialog(visible: boolean) {
    setTimeout(() => {
      this.visibleDeleteUserDialog = visible;
    }, 1);
  }

  onClickAddUser() {
    this.visibleAddUserModal = false;
    this.setVisibleAddUserModal(true);
  }

  setVisibleAddUserModal(visible: boolean) {
    setTimeout(() => {
      this.visibleAddUserModal = visible;
    }, 1);
  }
}
