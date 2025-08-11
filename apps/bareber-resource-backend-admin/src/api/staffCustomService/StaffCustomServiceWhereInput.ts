import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { ServiceEntityWhereUniqueInput } from "../serviceEntity/ServiceEntityWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StaffCustomServiceWhereInput = {
  duracionCustomMinutos?: IntNullableFilter;
  id?: StringFilter;
  precioCustom?: DecimalNullableFilter;
  serviceEntity?: ServiceEntityWhereUniqueInput;
  updatedAt?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
