import { Module } from "@nestjs/common";
import { AppointmentServiceItemModuleBase } from "./base/appointmentServiceItem.module.base";
import { AppointmentServiceItemService } from "./appointmentServiceItem.service";
import { AppointmentServiceItemController } from "./appointmentServiceItem.controller";
import { AppointmentServiceItemResolver } from "./appointmentServiceItem.resolver";

@Module({
  imports: [AppointmentServiceItemModuleBase],
  controllers: [AppointmentServiceItemController],
  providers: [AppointmentServiceItemService, AppointmentServiceItemResolver],
  exports: [AppointmentServiceItemService],
})
export class AppointmentServiceItemModule {}
