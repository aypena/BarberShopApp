import { AppointmentServiceWhereInput } from "./AppointmentServiceWhereInput";
import { AppointmentServiceOrderByInput } from "./AppointmentServiceOrderByInput";

export type AppointmentServiceFindManyArgs = {
  where?: AppointmentServiceWhereInput;
  orderBy?: Array<AppointmentServiceOrderByInput>;
  skip?: number;
  take?: number;
};
