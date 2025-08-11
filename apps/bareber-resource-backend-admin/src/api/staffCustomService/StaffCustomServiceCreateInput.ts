import { Decimal } from "decimal.js";
import { ServiceEntityWhereUniqueInput } from "../serviceEntity/ServiceEntityWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StaffCustomServiceCreateInput = {
  duracionCustomMinutos?: number | null;
  precioCustom?: Decimal | null;
  serviceEntity: ServiceEntityWhereUniqueInput;
  updatedAt?: Date | null;
  user: UserWhereUniqueInput;
};
