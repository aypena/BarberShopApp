import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AppointmentServiceItemService } from "./appointmentServiceItem.service";
import { AppointmentServiceItemControllerBase } from "./base/appointmentServiceItem.controller.base";

@swagger.ApiTags("appointmentServiceItems")
@common.Controller("appointmentServiceItems")
export class AppointmentServiceItemController extends AppointmentServiceItemControllerBase {
  constructor(protected readonly service: AppointmentServiceItemService) {
    super(service);
  }
}
