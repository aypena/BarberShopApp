import { Appointment as TAppointment } from "../api/appointment/Appointment";

export const APPOINTMENT_TITLE_FIELD = "estado";

export const AppointmentTitle = (record: TAppointment): string => {
  return record.estado?.toString() || String(record.id);
};
