import { ServiceEntity as TServiceEntity } from "../api/serviceEntity/ServiceEntity";

export const SERVICEENTITY_TITLE_FIELD = "categoria";

export const ServiceEntityTitle = (record: TServiceEntity): string => {
  return record.categoria?.toString() || String(record.id);
};
