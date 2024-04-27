import { Component, OnInit } from '@angular/core';

import { IUser } from '../model/user';
import { UsersService } from './../services/users.service';
import { Observable, catchError, of } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
  users$: Observable<IUser[]>;

  visibleErrorDialog: boolean = false;
  messageErrorDialog: string = '';

  visibleEditUserModal: boolean = false;

  visibleDeleteUserDialog: boolean = false;

  visibleAddUserModal: boolean = false;

  constructor(
    private usersService: UsersService
  ) {
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

  onClickEditUser() {
    this.visibleEditUserModal = false;
    this.setVisibleEditUserModal(true);
  }

  setVisibleEditUserModal(visible: boolean) {
    setTimeout(() => {
      this.visibleEditUserModal = visible;
    }, 1);
  }

  onClickDeleteUser() {
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

  ngOnInit(): void {}

}
