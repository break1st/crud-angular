import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ICidade } from '../model/cidade';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CidadesService {
  private readonly API = 'http://localhost:8080/';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<ICidade[]>(this.API + 'cidades');
  }
}
