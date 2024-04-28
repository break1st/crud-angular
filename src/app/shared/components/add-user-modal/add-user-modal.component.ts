import { Component, Input, OnInit } from '@angular/core';
import { ICidade } from '../../../cidades/model/cidade';
import { UsersService } from '../../../users/services/users.service';

interface City {
  id: number;
  name: string;
}

interface IUserData {
  nome: string;
  apelido: string;
  time: string;
  cpf: string;
  hobbie: string;
  cidade: {
    id: number;
    name: string;
  };
}

@Component({
  selector: 'app-add-user-modal',
  templateUrl: './add-user-modal.component.html',
  styleUrl: './add-user-modal.component.scss',
})
export class AddUserModalComponent implements OnInit {
  constructor(private usersService: UsersService) {}

  @Input() cidades: ICidade[] = [];
  @Input() visible: boolean = false;
  userData: IUserData = {
    nome: '',
    apelido: '',
    time: '',
    cpf: '',
    hobbie: '',
    cidade: {
      id: 0,
      name: '',
    },
  };

  citiesToSelect: City[] = this.cidades.map((cidade) => ({
    id: cidade.id,
    name: `${cidade.cidade} - ${cidade.estado}`,
  }));
  @Input() title: string = 'Adicionar Usuário';

  visibleErrorDialog: boolean = false;
  messageErrorDialog: string = '';

  ngOnInit() {
    if (this.cidades) {
      this.citiesToSelect = this.cidades.map((cidade) => ({
        id: cidade.id,
        name: `${cidade.cidade} - ${cidade.estado}`,
      }));
    }
  }

  showDialog() {
    this.visible = true;
  }

  onError(message: string) {
    this.messageErrorDialog = message;
    this.visibleErrorDialog = true;
  }

  salvar() {
    const user = {
      ...this.userData,
      cidade: {
        id: this.userData.cidade.id,
      },
    };
    this.usersService.create(user).subscribe(
      () => {
        location.reload();
      },
      () => this.onError('Erro ao cadastrar usuário.')
    );
    this.visible = false;
  }
}
