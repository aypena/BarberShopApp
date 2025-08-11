import { Role } from "../role/Role";
import { User } from "../user/User";

export type UserRole = {
  assignedAt: Date | null;
  id: string;
  role?: Role;
  user?: User;
};
