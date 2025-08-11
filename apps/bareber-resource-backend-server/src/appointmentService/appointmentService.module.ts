import { Module } from "@nestjs/common";
import { AppointmentServiceModuleBase } from "./base/appointmentService.module.base";
import { AppointmentServiceService } from "./appointmentService.service";
import { AppointmentServiceController } from "./appointmentService.controller";
import { AppointmentServiceResolver } from "./appointmentService.resolver";

@Module({
  imports: [AppointmentServiceModuleBase],
  controllers: [AppointmentServiceController],
  providers: [AppointmentServiceService, AppointmentServiceResolver],
  exports: [AppointmentServiceService],
})
export class AppointmentServiceModule {}
