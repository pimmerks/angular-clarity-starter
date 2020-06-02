import { Injectable } from '@angular/core';
import { JwtTokenService } from '@services/jwt-token/jwt-token.service';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { BaseClientService } from '@services/base-client/base-client.service';
import { IToken } from '@models/token.model';
import { map, tap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private readonly tokenService: JwtTokenService,
    private readonly http: BaseClientService,
  ) {
    this.authSubject = new BehaviorSubject<boolean>(this.tokenService.hasValidToken());
  }

  private authSubject: BehaviorSubject<boolean>;

  public get isAuthenticated$() {
    return this.authSubject.asObservable();
  }

  public get isAuthenticated() {
    return this.authSubject.value;
  }

  public login(email: string, password: string): Observable<boolean> {
    return this.http.post<IToken>('auth/login', { email, password })
    .pipe(
      map(token => {
        return this.tokenService.setAndValidateToken(token);
      }),
      tap(val => this.authSubject.next(val)));
  }

  public register(email: string, name: string, password: string): Observable<boolean> {
    return this.http.post<IToken>('auth/register', { email, password, name })
    .pipe(
      map(token => {
        return this.tokenService.setAndValidateToken(token);
      }),
      tap(val => this.authSubject.next(val)));
  }

  public logout() {
    this.tokenService.removeToken();
    this.authSubject.next(false);
  }
}
