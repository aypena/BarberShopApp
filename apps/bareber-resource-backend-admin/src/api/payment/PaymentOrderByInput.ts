import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  appointment_id?: SortOrder;
  createdAt?: SortOrder;
  detallePago?: SortOrder;
  fechaPago?: SortOrder;
  id?: SortOrder;
  metodoPago?: SortOrder;
  montoTotal?: SortOrder;
};
