import { Component, Input } from '@angular/core';
import { CidadesService } from '../../../cidades/services/cidades.service';
import { ICidade } from '../../../cidades/model/cidade';

interface ICidadeData {
  cidade: string;
  estado: string;
  habitantes: number;
}

@Component({
  selector: 'app-edit-cidade-modal',
  templateUrl: './edit-cidade-modal.component.html',
  styleUrl: './edit-cidade-modal.component.scss'
})
export class EditCidadeModalComponent {

  constructor(private cidadesService: CidadesService) {}

  @Input() title: string = 'Editar Cidade';
  @Input() visible: boolean = false;

  private _cidade: ICidade | null = null;
  @Input()
  set cidade(value: ICidade | null) {
    this._cidade = value;
    this.setCidadeData();
  }
  get cidade(): ICidade | null {
    return this._cidade;
  }
  cidadeData: ICidadeData = {
    cidade: '',
    estado: '',
    habitantes: 0
  };

  visibleErrorDialog: boolean = false;
  messageErrorDialog: string = '';

  ngOnInit() {}

  showDialog() {
    this.visible = true;
  }

  onError(message: string) {
    this.messageErrorDialog = message;
    this.visibleErrorDialog = true;
  }

  private setCidadeData() {
    if (this.cidade) {
      this.cidadeData = {
        cidade: this.cidade.cidade || '',
        estado: this.cidade.estado || '',
        habitantes: this.cidade.habitantes || 0
      };
    }
  }

  salvar() {
    if (!this.cidade) {
      return;
    }
    const cidadeUpdate = {
      id: this.cidade.id,
      ...this.cidadeData
    };
    this.cidadesService.update(cidadeUpdate).subscribe(
      () => {
        location.reload();
      },
      () => this.onError('Erro ao editar cidade.')
    );
    this.visible = false;
  }
}
