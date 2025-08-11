import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserStaffTypeService } from "./userStaffType.service";
import { UserStaffTypeControllerBase } from "./base/userStaffType.controller.base";

@swagger.ApiTags("userStaffTypes")
@common.Controller("userStaffTypes")
export class UserStaffTypeController extends UserStaffTypeControllerBase {
  constructor(protected readonly service: UserStaffTypeService) {
    super(service);
  }
}
