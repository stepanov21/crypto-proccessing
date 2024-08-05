export interface loginRes {
  access_token: string;
  token_type: "bearer";
}

export type TLoginPayload = {
  username: string;
  password: string;
};

export type TRegisterPayload = {
  email: string;
  username: string;
  password: string;
};