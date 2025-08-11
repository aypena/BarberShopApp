import { SortOrder } from "../../util/SortOrder";

export type SettingOrderByInput = {
  descripcion?: SortOrder;
  id?: SortOrder;
  tipoDato?: SortOrder;
  updatedAt?: SortOrder;
  valor?: SortOrder;
};
