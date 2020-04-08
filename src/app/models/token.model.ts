export interface IToken {
  token: string;
  tokenExpiresAt: Date;
  refreshToken: string;
  refreshTokenExpiresAt: Date;
  tokenType: string;
}

export interface IError {
  title: string;
  message: string;
  details: any;
}
