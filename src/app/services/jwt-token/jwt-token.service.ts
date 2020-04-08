import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IToken } from '@models/token.model';

@Injectable({
  providedIn: 'root'
})
export class JwtTokenService {
  constructor() { }

  public getToken(): Observable<IToken> {
    return of();
  }

  public setToken(token: IToken): Observable<any> {
    return of();
  }
}
