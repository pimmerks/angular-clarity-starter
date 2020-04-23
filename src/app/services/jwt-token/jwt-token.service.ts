import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { IToken } from '@models/token.model';

const JWT_STORAGE_KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class JwtTokenService {
  constructor() {
    const token = this.getTokenFromStorage();
    this.tokenSubject = new BehaviorSubject<IToken>(token);
  }

  private tokenSubject: BehaviorSubject<IToken>;

  public get token$(): Observable<IToken> {
    return this.tokenSubject.asObservable();
  }

  public getToken(): IToken {
    return this.getTokenFromStorage();
  }

  public setAndValidateToken(token: IToken): boolean {
    if (this.verifyToken(token)){
      this.setTokenInStorage(token);
      return true;
    }
    return false;
  }

  public verifyToken(token: IToken): boolean {
    if (!token) {
      return false;
    }

    if (!token.token) {
      return false;
    }

    return true; // TODO: Verify the actual jwt token and not just check for nulls...
  }

  public removeToken() {
    this.removeTokenFromStorage();
  }

  public hasValidToken(): boolean {
    return this.verifyToken(this.getTokenFromStorage());
  }

  private getTokenFromStorage(): IToken | null {
    const json = localStorage.getItem(JWT_STORAGE_KEY);
    if (!json) {
      return null;
    }
    return JSON.parse(json) as IToken;
  }

  private setTokenInStorage(token: IToken) {
    this.tokenSubject.next(token);
    if (!token) {
      localStorage.removeItem(JWT_STORAGE_KEY);
      return;
    }

    const json = JSON.stringify(token);
    localStorage.setItem(JWT_STORAGE_KEY, json);
  }

  private removeTokenFromStorage() {
    localStorage.removeItem(JWT_STORAGE_KEY);
    this.tokenSubject.next(null);
  }
}
