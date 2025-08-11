import { Module } from "@nestjs/common";
import { UserStaffTypeModuleBase } from "./base/userStaffType.module.base";
import { UserStaffTypeService } from "./userStaffType.service";
import { UserStaffTypeController } from "./userStaffType.controller";
import { UserStaffTypeResolver } from "./userStaffType.resolver";

@Module({
  imports: [UserStaffTypeModuleBase],
  controllers: [UserStaffTypeController],
  providers: [UserStaffTypeService, UserStaffTypeResolver],
  exports: [UserStaffTypeService],
})
export class UserStaffTypeModule {}
