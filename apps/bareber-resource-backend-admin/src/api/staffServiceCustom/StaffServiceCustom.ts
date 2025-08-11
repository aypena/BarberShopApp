import { Decimal } from "decimal.js";
import { Service } from "../service/Service";
import { User } from "../user/User";

export type StaffServiceCustom = {
  duracionCustomMinutos: number | null;
  id: string;
  precioCustom: Decimal | null;
  services?: Service;
  updatedAt: Date | null;
  users?: User;
};
