import { Role } from "../role/Role";
import { User } from "../user/User";

export type UserRole = {
  assignedAt: Date | null;
  id: string;
  roles?: Role;
  users?: User;
};
