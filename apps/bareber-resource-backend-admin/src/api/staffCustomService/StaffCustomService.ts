import { Decimal } from "decimal.js";
import { ServiceEntity } from "../serviceEntity/ServiceEntity";
import { User } from "../user/User";

export type StaffCustomService = {
  duracionCustomMinutos: number | null;
  id: string;
  precioCustom: Decimal | null;
  serviceEntity?: ServiceEntity;
  updatedAt: Date | null;
  user?: User;
};
