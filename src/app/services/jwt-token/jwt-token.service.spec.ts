import { TestBed } from '@angular/core/testing';

import { JwtTokenService } from './jwt-token.service';
import { IToken } from '@models/token.model';

describe('JwtTokenService', () => {
  let service: JwtTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwtTokenService);
  });

  const validAccessToken: IToken = {
    refreshToken: 'a',
    refreshTokenExpiresAt: Date.now(),
    token: 'a',
    tokenExpiresAt: Date.now(),
    tokenType: 'bearer'
  };

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have no access token', () => {
    localStorage.clear();
    expect(service).toBeTruthy();
    expect(service.getToken()).toBeNull();
  });

  it('can set and retrieve an access token', () => {
    localStorage.clear();
    expect(service).toBeTruthy();
    expect(service.getToken()).toBeNull();
    const setResult = service.setAndValidateToken(validAccessToken);

    expect(setResult).toBeTrue();
    expect(service.getToken()).toBeTruthy();
  });

  it('does not set an invalid access token', () => {
    localStorage.clear();
    expect(service).toBeTruthy();
    expect(service.getToken()).toBeNull();
    expect(service.setAndValidateToken(null)).toBeFalse();
    expect(service.getToken()).toBeNull();
  });

  it('can remove a access token', () => {
    localStorage.clear();
    expect(service).toBeTruthy();
    expect(service.getToken()).toBeNull();

    service.setAndValidateToken(validAccessToken);
    expect(service.getToken()).toBeTruthy();

    service.removeToken();
    expect(service.getToken()).toBeNull();
  });

  it('has an observable that we can subscribe to', () => {
    localStorage.clear();
    expect(service).toBeTruthy();
    expect(service.getToken()).toBeNull();

    service.setAndValidateToken(null);
  });
});
