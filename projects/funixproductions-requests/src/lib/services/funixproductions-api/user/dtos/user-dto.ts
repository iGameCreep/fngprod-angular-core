import {ApiDTO} from "../../../core/dtos/api-dto";

export enum UserRole {
  USER = "USER",
  MODERATOR = "MODERATOR",
  PACIFISTA_MODERATOR = "PACIFISTA_MODERATOR",
  PACIFISTA_ADMIN = "PACIFISTA_ADMIN",
  ADMIN = "ADMIN"
}

export class UserDTO extends ApiDTO {
  username?: string;
  email?: string;
  role?: UserRole
  valid?: boolean;
  country?: UserCountry;
}

export class UserCountry {
  name?: string;
  code?: number;
  countryCode2Chars?: string;
  countryCode3Chars?: string;
}
