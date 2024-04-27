import { Component, Input } from '@angular/core';
import { IUser } from '../../../users/model/user';

interface City {
  id: number;
  name: string;
}

@Component({
  selector: 'app-edit-user-modal',
  templateUrl: './edit-user-modal.component.html',
  styleUrl: './edit-user-modal.component.scss',
})
export class EditUserModalComponent {
  cities: City[] = [
    { name: 'New York', id: 1 },
    { name: 'Rome', id: 2 },
    { name: 'London', id: 3 },
    { name: 'Istanbul', id: 4 },
    { name: 'Paris', id: 5 }
];
  @Input() title: string = 'Editar Usuário';
  @Input() visible: boolean = false;
  @Input() user: IUser = {
    id: 0,
    nome: '',
    apelido: '',
    cidade: '',
    hobbie: '',
    time: '',
    cpf: '',
  };

  showDialog() {
    this.visible = true;
  }
}
