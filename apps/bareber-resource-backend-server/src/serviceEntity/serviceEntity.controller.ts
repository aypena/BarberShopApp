import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ServiceEntityService } from "./serviceEntity.service";
import { ServiceEntityControllerBase } from "./base/serviceEntity.controller.base";

@swagger.ApiTags("serviceEntities")
@common.Controller("serviceEntities")
export class ServiceEntityController extends ServiceEntityControllerBase {
  constructor(protected readonly service: ServiceEntityService) {
    super(service);
  }
}
