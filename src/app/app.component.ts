import { Component } from '@angular/core';
import { AuthenticationService } from '@services/authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(
    public readonly authService: AuthenticationService
  ) { }

  public isAuthenticated$ = this.authService.isAuthenticated$;
}
