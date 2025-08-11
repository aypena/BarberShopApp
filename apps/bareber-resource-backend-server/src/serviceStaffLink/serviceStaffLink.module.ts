import { Module } from "@nestjs/common";
import { ServiceStaffLinkModuleBase } from "./base/serviceStaffLink.module.base";
import { ServiceStaffLinkService } from "./serviceStaffLink.service";
import { ServiceStaffLinkController } from "./serviceStaffLink.controller";
import { ServiceStaffLinkResolver } from "./serviceStaffLink.resolver";

@Module({
  imports: [ServiceStaffLinkModuleBase],
  controllers: [ServiceStaffLinkController],
  providers: [ServiceStaffLinkService, ServiceStaffLinkResolver],
  exports: [ServiceStaffLinkService],
})
export class ServiceStaffLinkModule {}
