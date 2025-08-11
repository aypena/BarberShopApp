import * as graphql from "@nestjs/graphql";
import { AppointmentServiceItemResolverBase } from "./base/appointmentServiceItem.resolver.base";
import { AppointmentServiceItem } from "./base/AppointmentServiceItem";
import { AppointmentServiceItemService } from "./appointmentServiceItem.service";

@graphql.Resolver(() => AppointmentServiceItem)
export class AppointmentServiceItemResolver extends AppointmentServiceItemResolverBase {
  constructor(protected readonly service: AppointmentServiceItemService) {
    super(service);
  }
}
