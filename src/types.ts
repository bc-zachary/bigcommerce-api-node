export interface BigCommerceConfig {
  clientId?: string;
  clientSecret?: string;
  authCallback?: string;
  loginHost?: string;
}

export enum BigCommerceConfigProperties {
  ClientId = 'clientId',
  ClientSecret = 'clientSecret',
  AuthCallback = 'authCallback',
  ApiHost = 'apiHost',
  LoginHost = 'loginHost',
}

export interface AuthCallbackQueryParams {
  code: string;
  scope: string;
  context: string;
}

/* eslint-disable @typescript-eslint/naming-convention */
export interface AuthResponsePayload {
  access_token: string;
  scope: string;
  user: User;
  context: string;
  account_uuid: string;
}
/* eslint-enable @typescript-eslint/naming-convention */

export interface User {
  id: number;
  username: string;
  email: string;
}

export interface VerifiedJwt {
  aud: string;
  iss: string;
  iat: number;
  nbf: number;
  exp: number;
  jti: string;
  sub: string;
  user: {
    id: number;
    email: string;
  };
  owner: {
    id: number;
    email: string;
  };
  url: string;
}
