import * as graphql from "@nestjs/graphql";
import { AppointmentServiceResolverBase } from "./base/appointmentService.resolver.base";
import { AppointmentService } from "./base/AppointmentService";
import { AppointmentServiceService } from "./appointmentService.service";

@graphql.Resolver(() => AppointmentService)
export class AppointmentServiceResolver extends AppointmentServiceResolverBase {
  constructor(protected readonly service: AppointmentServiceService) {
    super(service);
  }
}
