import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AppointmentServiceItemServiceBase } from "./base/appointmentServiceItem.service.base";

@Injectable()
export class AppointmentServiceItemService extends AppointmentServiceItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
