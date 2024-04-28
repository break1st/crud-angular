import { Component } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

import { ICidade } from '../model/cidade';
import { CidadesService } from '../services/cidades.service';

@Component({
  selector: 'app-cidades',
  templateUrl: './cidades.component.html',
  styleUrl: './cidades.component.scss'
})
export class CidadesComponent {

  constructor(
    private cidadesService: CidadesService
  ) {
    this.cidades$ = this.cidadesService.list()
    .pipe(
      catchError((error) => {
        console.error(error);
        this.onError('Erro ao carregar cidades');
        return of([]);
      })
    );
  }

  cidades$: Observable<ICidade[]>;

  cidadeToEdit: ICidade | null = null;
  cidadeIdToDelete: number | null = null;

  visibleErrorDialog: boolean = false;
  messageErrorDialog: string = '';

  visibleEditCidadeModal: boolean = false;

  visibleDeleteCidadeDialog: boolean = false;

  visibleAddCidadeModal: boolean = false;

  refresh() {
    this.cidades$ = this.cidadesService.list()
    .pipe(
      catchError((error) => {
        console.error(error);
        this.onError('Erro ao carregar cidades');
        return of([]);
      })
    );
  }

  onError(message: string) {
    this.messageErrorDialog = message;
    this.visibleErrorDialog = true;
  }

  onClickEditCidade(cidade: ICidade) {
    this.cidadeToEdit = cidade;
    this.visibleEditCidadeModal = false;
    this.setVisibleEditCidadeModal(true);
  }

  setVisibleEditCidadeModal(visible: boolean) {
    setTimeout(() => {
      this.visibleEditCidadeModal = visible;
    }, 1);
  }

  onClickDeleteCidade(cidade: ICidade) {
    this.cidadeIdToDelete = cidade.id;
    this.visibleDeleteCidadeDialog = false;
    this.setVisibleDeleteCidadeDialog(true);
  }

  setVisibleDeleteCidadeDialog(visible: boolean) {
    setTimeout(() => {
      this.visibleDeleteCidadeDialog = visible;
    }, 1);
  }

  onClickAddCidade() {
    this.visibleAddCidadeModal = false;
    this.setVisibleAddCidadeModal(true);
  }

  setVisibleAddCidadeModal(visible: boolean) {
    setTimeout(() => {
      this.visibleAddCidadeModal = visible;
    }, 1);
  }
}
