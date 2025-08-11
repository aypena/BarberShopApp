import { Setting as TSetting } from "../api/setting/Setting";

export const SETTING_TITLE_FIELD = "descripcion";

export const SettingTitle = (record: TSetting): string => {
  return record.descripcion?.toString() || String(record.id);
};
