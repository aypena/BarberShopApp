import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StaffServiceCustomWhereInput = {
  duracionCustomMinutos?: IntNullableFilter;
  id?: StringFilter;
  precioCustom?: DecimalNullableFilter;
  services?: ServiceWhereUniqueInput;
  updatedAt?: DateTimeNullableFilter;
  users?: UserWhereUniqueInput;
};
