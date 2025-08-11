import { Decimal } from "decimal.js";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StaffServiceCustomUpdateInput = {
  duracionCustomMinutos?: number | null;
  precioCustom?: Decimal | null;
  services?: ServiceWhereUniqueInput;
  updatedAt?: Date | null;
  users?: UserWhereUniqueInput;
};
