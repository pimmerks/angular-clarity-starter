import { Injectable } from '@angular/core';
import { JwtTokenService } from '@services/jwt-token/jwt-token.service';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { BaseClientService } from '@services/base-client/base-client.service';
import { IToken } from '@models/token.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private readonly tokenService: JwtTokenService,
    private readonly http: BaseClientService,
  ) { }

  private authSubject: BehaviorSubject<boolean>;

  public login(email: string, password: string): Observable<IToken> {
    return this.http.post<IToken>('auth/login', { email, password });
  }

  public register(email: string, name: string, password: string): Observable<IToken> {
    return this.http.post<IToken>('auth/register', { email, password, name });
  }
}
