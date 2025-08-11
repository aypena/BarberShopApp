import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AppointmentServiceService } from "./appointmentService.service";
import { AppointmentServiceControllerBase } from "./base/appointmentService.controller.base";

@swagger.ApiTags("appointmentServices")
@common.Controller("appointmentServices")
export class AppointmentServiceController extends AppointmentServiceControllerBase {
  constructor(protected readonly service: AppointmentServiceService) {
    super(service);
  }
}
