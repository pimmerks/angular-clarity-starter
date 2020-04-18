export interface IToken {
  token: string;
  tokenExpiresAt: Date;
  refreshToken: string;
  refreshTokenExpiresAt: Date;
  tokenType: string;
}
