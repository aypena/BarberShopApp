import { Module } from "@nestjs/common";
import { StaffServiceCustomModuleBase } from "./base/staffServiceCustom.module.base";
import { StaffServiceCustomService } from "./staffServiceCustom.service";
import { StaffServiceCustomController } from "./staffServiceCustom.controller";
import { StaffServiceCustomResolver } from "./staffServiceCustom.resolver";

@Module({
  imports: [StaffServiceCustomModuleBase],
  controllers: [StaffServiceCustomController],
  providers: [StaffServiceCustomService, StaffServiceCustomResolver],
  exports: [StaffServiceCustomService],
})
export class StaffServiceCustomModule {}
