import { Component, Input } from '@angular/core';

interface City {
  id: number;
  name: string;
}

@Component({
  selector: 'app-add-user-modal',
  templateUrl: './add-user-modal.component.html',
  styleUrl: './add-user-modal.component.scss'
})
export class AddUserModalComponent {
  cities: City[] = [
    { name: 'New York', id: 1 },
    { name: 'Rome', id: 2 },
    { name: 'London', id: 3 },
    { name: 'Istanbul', id: 4 },
    { name: 'Paris', id: 5 }
];

  @Input() title: string = 'Adicionar Usuário';
  @Input() visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
}
