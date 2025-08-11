import { UserRole } from "../userRole/UserRole";

export type Role = {
  descripcion: string | null;
  id: string;
  nombre: string | null;
  userRoles?: Array<UserRole>;
};
