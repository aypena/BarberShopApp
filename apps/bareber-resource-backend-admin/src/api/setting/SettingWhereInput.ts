import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type SettingWhereInput = {
  descripcion?: StringNullableFilter;
  id?: StringFilter;
  tipoDato?: StringNullableFilter;
  updatedAt?: DateTimeNullableFilter;
  valor?: StringNullableFilter;
};
