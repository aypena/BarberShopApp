import { SortOrder } from "../../util/SortOrder";

export type ServiceEntityOrderByInput = {
  activo?: SortOrder;
  categoria?: SortOrder;
  createdAt?: SortOrder;
  descripcion?: SortOrder;
  duracionBaseMinutos?: SortOrder;
  id?: SortOrder;
  nombre?: SortOrder;
  precioBase?: SortOrder;
};
