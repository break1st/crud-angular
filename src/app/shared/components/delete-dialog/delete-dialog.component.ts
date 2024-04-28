import { Component, Input } from '@angular/core';
import { UsersService } from '../../../users/services/users.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrl: './delete-dialog.component.scss',
})
export class DeleteDialogComponent {
  constructor(private usersService: UsersService) {}

  @Input() title: string = 'Tem certeza que deseja remover o usuário?';
  @Input() visible: boolean = false;
  @Input() userId!: number | null;

  showDialog() {
    this.visible = true;
  }

  closeDialog() {
    this.visible = false;
  }

  confirm() {
    if (!this.userId) {
      return;
    }
    this.usersService.delete(this.userId).subscribe(() => {
      location.reload();
    });
    this.userId = null;
    this.visible = false;
  }
}
