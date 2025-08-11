import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StaffCustomServiceService } from "./staffCustomService.service";
import { StaffCustomServiceControllerBase } from "./base/staffCustomService.controller.base";

@swagger.ApiTags("staffCustomServices")
@common.Controller("staffCustomServices")
export class StaffCustomServiceController extends StaffCustomServiceControllerBase {
  constructor(protected readonly service: StaffCustomServiceService) {
    super(service);
  }
}
