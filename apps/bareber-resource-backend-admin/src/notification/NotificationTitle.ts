import { Notification as TNotification } from "../api/notification/Notification";

export const NOTIFICATION_TITLE_FIELD = "estado";

export const NotificationTitle = (record: TNotification): string => {
  return record.estado?.toString() || String(record.id);
};
