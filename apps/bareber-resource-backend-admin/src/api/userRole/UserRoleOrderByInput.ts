import { SortOrder } from "../../util/SortOrder";

export type UserRoleOrderByInput = {
  assignedAt?: SortOrder;
  id?: SortOrder;
  role_id?: SortOrder;
  user_id?: SortOrder;
};
