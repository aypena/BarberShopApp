import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  activo?: SortOrder;
  email?: SortOrder;
  fechaRegistro?: SortOrder;
  id?: SortOrder;
  nombre?: SortOrder;
  passwordHash?: SortOrder;
  telefono?: SortOrder;
};
