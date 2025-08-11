import { SortOrder } from "../../util/SortOrder";

export type NotificationOrderByInput = {
  appointment_id?: SortOrder;
  client_id?: SortOrder;
  createdAt?: SortOrder;
  estado?: SortOrder;
  fechaEnvio?: SortOrder;
  fechaProgramada?: SortOrder;
  id?: SortOrder;
  mensaje?: SortOrder;
  tipo?: SortOrder;
};
