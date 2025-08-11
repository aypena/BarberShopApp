import { SortOrder } from "../../util/SortOrder";

export type AppointmentServiceItemOrderByInput = {
  appointment_id?: SortOrder;
  duracionFinalMinutos?: SortOrder;
  estado?: SortOrder;
  fechaAgregado?: SortOrder;
  id?: SortOrder;
  notas?: SortOrder;
  precioFinal?: SortOrder;
  service_id?: SortOrder;
  staff_id?: SortOrder;
};
