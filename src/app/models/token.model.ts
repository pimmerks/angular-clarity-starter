export interface IToken {
  token: string;
  tokenExpiresAt: number;
  refreshToken: string;
  refreshTokenExpiresAt: number;
  tokenType: string;
}
