import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ServiceStaffTypeService } from "./serviceStaffType.service";
import { ServiceStaffTypeControllerBase } from "./base/serviceStaffType.controller.base";

@swagger.ApiTags("serviceStaffTypes")
@common.Controller("serviceStaffTypes")
export class ServiceStaffTypeController extends ServiceStaffTypeControllerBase {
  constructor(protected readonly service: ServiceStaffTypeService) {
    super(service);
  }
}
