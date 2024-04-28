import { Component, Input } from '@angular/core';
import { CidadesService } from '../../../cidades/services/cidades.service';

@Component({
  selector: 'app-delete-cidade-dialog',
  templateUrl: './delete-cidade-dialog.component.html',
  styleUrl: './delete-cidade-dialog.component.scss'
})
export class DeleteCidadeDialogComponent {
  constructor(private cidadesService: CidadesService) {}

  @Input() title: string = 'Tem certeza que deseja remover a cidade?';
  @Input() visible: boolean = false;
  @Input() cidadeId!: number | null;

  showDialog() {
    this.visible = true;
  }

  closeDialog() {
    this.visible = false;
  }

  confirm() {
    if (!this.cidadeId) {
      return;
    }
    this.cidadesService.delete(this.cidadeId).subscribe(() => {
      location.reload();
    });
    this.cidadeId = null;
    this.visible = false;
  }
}
