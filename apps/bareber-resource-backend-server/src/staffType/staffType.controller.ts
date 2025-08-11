import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StaffTypeService } from "./staffType.service";
import { StaffTypeControllerBase } from "./base/staffType.controller.base";

@swagger.ApiTags("staffTypes")
@common.Controller("staffTypes")
export class StaffTypeController extends StaffTypeControllerBase {
  constructor(protected readonly service: StaffTypeService) {
    super(service);
  }
}
