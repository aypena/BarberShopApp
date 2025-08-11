import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ServiceStaffLinkService } from "./serviceStaffLink.service";
import { ServiceStaffLinkControllerBase } from "./base/serviceStaffLink.controller.base";

@swagger.ApiTags("serviceStaffLinks")
@common.Controller("serviceStaffLinks")
export class ServiceStaffLinkController extends ServiceStaffLinkControllerBase {
  constructor(protected readonly service: ServiceStaffLinkService) {
    super(service);
  }
}
