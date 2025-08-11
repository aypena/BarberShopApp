import { Client as TClient } from "../api/client/Client";

export const CLIENT_TITLE_FIELD = "email";

export const ClientTitle = (record: TClient): string => {
  return record.email?.toString() || String(record.id);
};
