import { Service as TService } from "../api/service/Service";

export const SERVICE_TITLE_FIELD = "categoria";

export const ServiceTitle = (record: TService): string => {
  return record.categoria?.toString() || String(record.id);
};
