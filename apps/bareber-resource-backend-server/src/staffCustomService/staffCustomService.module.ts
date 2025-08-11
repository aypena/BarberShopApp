import { Module } from "@nestjs/common";
import { StaffCustomServiceModuleBase } from "./base/staffCustomService.module.base";
import { StaffCustomServiceService } from "./staffCustomService.service";
import { StaffCustomServiceController } from "./staffCustomService.controller";
import { StaffCustomServiceResolver } from "./staffCustomService.resolver";

@Module({
  imports: [StaffCustomServiceModuleBase],
  controllers: [StaffCustomServiceController],
  providers: [StaffCustomServiceService, StaffCustomServiceResolver],
  exports: [StaffCustomServiceService],
})
export class StaffCustomServiceModule {}
