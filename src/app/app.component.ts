import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'crud-angular';

  constructor(private router: Router) {}

redirectTo(route: string) {
  this.router.navigateByUrl(route);
}
}
