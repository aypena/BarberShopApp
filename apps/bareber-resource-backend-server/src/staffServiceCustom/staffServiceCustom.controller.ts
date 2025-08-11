import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StaffServiceCustomService } from "./staffServiceCustom.service";
import { StaffServiceCustomControllerBase } from "./base/staffServiceCustom.controller.base";

@swagger.ApiTags("staffServiceCustoms")
@common.Controller("staffServiceCustoms")
export class StaffServiceCustomController extends StaffServiceCustomControllerBase {
  constructor(protected readonly service: StaffServiceCustomService) {
    super(service);
  }
}
