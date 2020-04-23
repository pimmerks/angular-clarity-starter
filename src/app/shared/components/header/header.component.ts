import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@services/authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  constructor(
    public readonly authService: AuthenticationService
  ) { }

  public isAuthenticated$ = this.authService.isAuthenticated$;

}
