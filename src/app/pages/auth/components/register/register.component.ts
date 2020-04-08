import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '@services/authentication/authentication.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClrLoadingState } from '@clr/angular';
import { map, flatMap } from 'rxjs/operators';
import { IError } from '@models/token.model';
import { from } from 'rxjs';

@Component({
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly authService: AuthenticationService
  ) { }

  public registerForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  public registerBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;

  public returnUrl$ = this.activatedRoute.queryParams.pipe(map(x => (x.returnUrl as string) ?? '/'));

  public error: IError = null;

  onSubmit(): void {
    if (this.registerForm.invalid) {
      return;
    }

    this.registerBtnState = ClrLoadingState.LOADING;

    this.authService.register(this.registerForm.value.email, this.registerForm.value.name, this.registerForm.value.password)
    .pipe(
      flatMap(_ => this.returnUrl$),
      flatMap(returnUrl => from(this.router.navigateByUrl(returnUrl))))
    .subscribe(token => {
      this.registerBtnState = ClrLoadingState.SUCCESS;
    },
    (error: IError) => {
      console.warn('error:', error);
      this.error = error;
      this.registerBtnState = ClrLoadingState.ERROR;
    });
  }

}
