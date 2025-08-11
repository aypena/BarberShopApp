import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AppointmentServiceServiceBase } from "./base/appointmentService.service.base";

@Injectable()
export class AppointmentServiceService extends AppointmentServiceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
