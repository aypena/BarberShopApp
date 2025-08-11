import { StaffCustomServiceWhereInput } from "./StaffCustomServiceWhereInput";
import { StaffCustomServiceOrderByInput } from "./StaffCustomServiceOrderByInput";

export type StaffCustomServiceFindManyArgs = {
  where?: StaffCustomServiceWhereInput;
  orderBy?: Array<StaffCustomServiceOrderByInput>;
  skip?: number;
  take?: number;
};
