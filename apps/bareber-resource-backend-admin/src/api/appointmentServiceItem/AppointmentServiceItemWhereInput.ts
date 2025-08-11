import { AppointmentWhereUniqueInput } from "../appointment/AppointmentWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { ServiceEntityWhereUniqueInput } from "../serviceEntity/ServiceEntityWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AppointmentServiceItemWhereInput = {
  appointment?: AppointmentWhereUniqueInput;
  duracionFinalMinutos?: IntNullableFilter;
  estado?: StringNullableFilter;
  fechaAgregado?: DateTimeNullableFilter;
  id?: StringFilter;
  notas?: StringNullableFilter;
  precioFinal?: DecimalNullableFilter;
  serviceEntity?: ServiceEntityWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
