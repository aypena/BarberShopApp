import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  client_id?: SortOrder;
  createdAt?: SortOrder;
  estado?: SortOrder;
  fechaFin?: SortOrder;
  fechaInicio?: SortOrder;
  id?: SortOrder;
  notas?: SortOrder;
  updatedAt?: SortOrder;
};
