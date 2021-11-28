import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { JwtTokenService } from '@services/jwt-token/jwt-token.service';
import { rethrowHttpError } from '@helpers/operators/rethrow-http-error.operator';

/**
 * Provides an authenticated Http Client.
 */
@Injectable({
  providedIn: 'root'
})
export class BaseClientService {

  constructor(
    private readonly http: HttpClient,
    private readonly token: JwtTokenService
  ) { }

  public get<T>(url: string): Observable<T> {
    const fullUrl = this.makeUrl(url);
    return this.http.get<T>(fullUrl)
      .pipe(rethrowHttpError());
  }

  public post<T>(url: string, body: any): Observable<T> {
    const fullUrl = this.makeUrl(url);
    return this.http.post<T>(fullUrl, body)
      .pipe(rethrowHttpError());
  }

  public put<T>(url: string, body: any): Observable<T> {
    const fullUrl = this.makeUrl(url);
    return this.http.put<T>(fullUrl, body)
      .pipe(rethrowHttpError());
  }

  public delete<T>(url: string): Observable<T> {
    const fullUrl = this.makeUrl(url);
    return this.http.delete<T>(fullUrl)
      .pipe(rethrowHttpError());
  }

  private makeUrl(url: string): string {
    if (url.startsWith('https://')){
      return url;
    }
    return `${environment.baseUrl}${url}`;
  }
}
