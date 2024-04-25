import { Component } from '@angular/core';

interface IUser {
  id: number;
  nome: string;
  apelido: string;
  time: string;
  cpf: string;
  hobbie: string;
  cidade: string;
}


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  users: IUser[] = [
    {
      id: 1,
      nome: 'João',
      apelido: 'Joãozinho',
      time: 'Flamengo',
      cpf: '123.456.789-00',
      hobbie: 'Jogar bola',
      cidade: 'Rio de Janeiro'
    },
    {
      id: 2,
      nome: 'Maria',
      apelido: 'Mariazinha',
      time: 'Fluminense',
      cpf: '987.654.321-00',
      hobbie: 'Ler livros',
      cidade: 'Niterói'
    },
    {
      id: 3,
      nome: 'José',
      apelido: 'Zé',
      time: 'Botafogo',
      cpf: '456.789.123-00',
      hobbie: 'Assistir filmes',
      cidade: 'São Paulo'
    },
    {
      id: 4,
      nome: 'Ana',
      apelido: 'Aninha',
      time: 'Vasco',
      cpf: '789.123.456-00',
      hobbie: 'Cozinhar',
      cidade: 'Belo Horizonte'
    }
  ];

  constructor() { }
}
