import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clientApp2022';
  isAuthenticated$ = this.auth.isAuthenticated$

  constructor(@Inject(DOCUMENT)public document:Document, public auth: AuthService) {}
  
}
