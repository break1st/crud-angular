import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrl: './error-dialog.component.scss',
})
export class ErrorDialogComponent {
  @Input() visible: boolean = false;
  @Input() message: string = '';

  constructor() {}

  showDialog() {
    this.visible = true;
  }
  closeDialog() {
    this.visible = false;
  }
}
