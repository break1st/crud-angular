import { Component, Input, OnInit } from '@angular/core';
import { CidadesService } from '../../../cidades/services/cidades.service';

interface ICidadeData {
  cidade: string;
  estado: string;
  habitantes: number;
}

@Component({
  selector: 'app-add-cidade-modal',
  templateUrl: './add-cidade-modal.component.html',
  styleUrl: './add-cidade-modal.component.scss'
})
export class AddCidadeModalComponent implements OnInit {

  constructor(private cidadesService: CidadesService) {}

  @Input() visible: boolean = false;
  cidadeData: ICidadeData = {
    cidade: '',
    estado: '',
    habitantes: 0
  };
  @Input() title: string = 'Adicionar Cidade';

  visibleErrorDialog: boolean = false;
  messageErrorDialog: string = '';

  showDialog() {
    this.visible = true;
  }

  onError(message: string) {
    this.messageErrorDialog = message;
    this.visibleErrorDialog = true;
  }

  salvar() {
    this.cidadesService.create(this.cidadeData).subscribe(
      () => {
        location.reload();
      },
      () => this.onError('Erro ao cadastrar cidade.')
    );
    this.visible = false;
  }

  ngOnInit() {}
}
