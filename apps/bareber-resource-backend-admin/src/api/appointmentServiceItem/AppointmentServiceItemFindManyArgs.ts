import { AppointmentServiceItemWhereInput } from "./AppointmentServiceItemWhereInput";
import { AppointmentServiceItemOrderByInput } from "./AppointmentServiceItemOrderByInput";

export type AppointmentServiceItemFindManyArgs = {
  where?: AppointmentServiceItemWhereInput;
  orderBy?: Array<AppointmentServiceItemOrderByInput>;
  skip?: number;
  take?: number;
};
