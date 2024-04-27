import { Component, Input } from '@angular/core';

interface City {
  id: number;
  name: string;
}

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrl: './delete-dialog.component.scss'
})
export class DeleteDialogComponent {
  cities: City[] = [
    { name: 'New York', id: 1 },
    { name: 'Rome', id: 2 },
    { name: 'London', id: 3 },
    { name: 'Istanbul', id: 4 },
    { name: 'Paris', id: 5 }
];

  @Input() title: string = 'Tem certeza que deseja remover o usuário?';
  @Input() visible: boolean = false;
  @Input() userId!: number;

  showDialog() {
    this.visible = true;
  }

  closeDialog() {
    this.visible = false;
  }
}
