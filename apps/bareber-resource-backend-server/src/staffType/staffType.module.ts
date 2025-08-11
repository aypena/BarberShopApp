import { Module } from "@nestjs/common";
import { StaffTypeModuleBase } from "./base/staffType.module.base";
import { StaffTypeService } from "./staffType.service";
import { StaffTypeController } from "./staffType.controller";
import { StaffTypeResolver } from "./staffType.resolver";

@Module({
  imports: [StaffTypeModuleBase],
  controllers: [StaffTypeController],
  providers: [StaffTypeService, StaffTypeResolver],
  exports: [StaffTypeService],
})
export class StaffTypeModule {}
