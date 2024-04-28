import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ICidade } from '../model/cidade';

interface CreateCidadeRequest {
  cidade: string;
  estado: string;
  habitantes: number;
}

interface UpdateCidadeRequest {
  id: number;
  cidade: string;
  estado: string;
  habitantes: number;
}

@Injectable({
  providedIn: 'root',
})
export class CidadesService {
  private readonly API = 'http://localhost:8080/';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<ICidade[]>(this.API + 'cidades');
  }

  create(cidade: CreateCidadeRequest) {
    return this.httpClient.post<ICidade>(this.API + 'cidades', cidade);
  }

  update(cidade: UpdateCidadeRequest) {
    const { id, ...rest } = cidade;
    return this.httpClient.put<ICidade>(this.API + `cidades/${id}`, rest);
  }

  delete(id: number) {
    return this.httpClient.delete(this.API + `cidades/${id}`);
  }
}
