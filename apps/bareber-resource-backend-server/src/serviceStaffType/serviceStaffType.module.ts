import { Module } from "@nestjs/common";
import { ServiceStaffTypeModuleBase } from "./base/serviceStaffType.module.base";
import { ServiceStaffTypeService } from "./serviceStaffType.service";
import { ServiceStaffTypeController } from "./serviceStaffType.controller";
import { ServiceStaffTypeResolver } from "./serviceStaffType.resolver";

@Module({
  imports: [ServiceStaffTypeModuleBase],
  controllers: [ServiceStaffTypeController],
  providers: [ServiceStaffTypeService, ServiceStaffTypeResolver],
  exports: [ServiceStaffTypeService],
})
export class ServiceStaffTypeModule {}
