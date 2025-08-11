import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StaffCustomServiceServiceBase } from "./base/staffCustomService.service.base";

@Injectable()
export class StaffCustomServiceService extends StaffCustomServiceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
