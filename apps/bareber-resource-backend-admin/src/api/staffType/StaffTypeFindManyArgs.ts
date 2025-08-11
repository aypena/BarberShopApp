import { StaffTypeWhereInput } from "./StaffTypeWhereInput";
import { StaffTypeOrderByInput } from "./StaffTypeOrderByInput";

export type StaffTypeFindManyArgs = {
  where?: StaffTypeWhereInput;
  orderBy?: Array<StaffTypeOrderByInput>;
  skip?: number;
  take?: number;
};
