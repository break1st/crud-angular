import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IUser } from '../model/user';
import { first } from 'rxjs';

interface CreateUserRequest {
  nome: string;
  apelido: string;
  time: string;
  cpf: string;
  hobbie: string;
  cidade: {
    id: number;
  };
}

interface UpdateUserRequest {
  id: number;
  nome: string;
  apelido: string;
  time: string;
  cpf: string;
  hobbie: string;
  cidade: {
    id: number;
  };
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private readonly API = 'http://localhost:8080/';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<IUser[]>(this.API + 'users');
  }

  create(user: CreateUserRequest) {
    return this.httpClient.post<IUser>(this.API + 'users', user).pipe(first());
  }

  update(user: UpdateUserRequest) {
    const { id, ...rest } = user;
    return this.httpClient.put<IUser>(this.API + `users/${id}`, rest).pipe(first());
  }

  delete(id: number) {
    return this.httpClient.delete(this.API + `users/${id}`).pipe(first());
  }
}
