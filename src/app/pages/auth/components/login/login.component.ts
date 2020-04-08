import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ClrLoadingState } from '@clr/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '@services/authentication/authentication.service';
import { map, flatMap } from 'rxjs/operators';
import { from } from 'rxjs';
import { IError } from '@models/token.model';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly authService: AuthenticationService
  ) { }

  public loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  public loginBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;

  public returnUrl$ = this.activatedRoute.queryParams.pipe(map(x => (x.returnUrl as string) ?? '/'));

  public error: IError = null;

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    this.loginBtnState = ClrLoadingState.LOADING;

    this.authService.login(this.loginForm.value.email, this.loginForm.value.password)
    .pipe(
      flatMap(_ => this.returnUrl$),
      flatMap(returnUrl => from(this.router.navigateByUrl(returnUrl))))
    .subscribe(token => {
      this.loginBtnState = ClrLoadingState.SUCCESS;
    },
    (error: IError) => {
      console.warn('error:', error);
      this.error = error;
      this.loginBtnState = ClrLoadingState.ERROR;
    });
  }

}
