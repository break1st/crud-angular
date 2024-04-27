import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IUser } from '../model/user';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly API = '../../../assets/users.json';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<IUser[]>(this.API)
  }
}
