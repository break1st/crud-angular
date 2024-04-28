import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../../../users/model/user';
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
  selector: 'app-edit-user-modal',
  templateUrl: './edit-user-modal.component.html',
  styleUrls: ['./edit-user-modal.component.scss'],
})
export class EditUserModalComponent implements OnInit {
  constructor(private usersService: UsersService) {}

  @Input() cidades: ICidade[] = [];
  citiesToSelect: City[] = [];

  @Input() title: string = 'Editar Usuário';
  @Input() visible: boolean = false;

  private _user: IUser | null = null;
  @Input()
  set user(value: IUser | null) {
    this._user = value;
    this.setUserData();
  }
  get user(): IUser | null {
    return this._user;
  }
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

  visibleErrorDialog: boolean = false;
  messageErrorDialog: string = '';

  ngOnInit() {
    console.log('cidades', this.cidades);
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

  private setUserData() {
    if (this.user) {
      this.userData = {
        nome: this.user.nome || '',
        apelido: this.user.apelido || '',
        time: this.user.time || '',
        cpf: this.user.cpf || '',
        hobbie: this.user.hobbie || '',
        cidade: {
          id: this.user.cidade.id || 0,
          name: `${this.user.cidade.cidade} - ${this.user.cidade.estado}` || '',
        },
      };
    }
  }

  salvar() {
    if (!this.user) {
      return;
    }
    const userUpdate = {
      id: this.user.id,
      ...this.userData,
      cidade: {
        id: this.userData.cidade.id,
      },
    };
    this.usersService.update(userUpdate).subscribe(
      () => {
        location.reload();
      },
      () => this.onError('Erro ao editar usuário.')
    );
    this.visible = false;
  }
}
