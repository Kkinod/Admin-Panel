import { IGlobalStyleProps } from "./globalStyle";

export interface IGenerateUsersColumnsBox extends IGlobalStyleProps {
  role: "superadmin" | "admin" | "user";
}
