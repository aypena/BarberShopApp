import { AppointmentService as TAppointmentService } from "../api/appointmentService/AppointmentService";

export const APPOINTMENTSERVICE_TITLE_FIELD = "estado";

export const AppointmentServiceTitle = (
  record: TAppointmentService
): string => {
  return record.estado?.toString() || String(record.id);
};
