import { AppointmentServiceItem as TAppointmentServiceItem } from "../api/appointmentServiceItem/AppointmentServiceItem";

export const APPOINTMENTSERVICEITEM_TITLE_FIELD = "estado";

export const AppointmentServiceItemTitle = (
  record: TAppointmentServiceItem
): string => {
  return record.estado?.toString() || String(record.id);
};
