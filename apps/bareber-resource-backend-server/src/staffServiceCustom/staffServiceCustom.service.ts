import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StaffServiceCustomServiceBase } from "./base/staffServiceCustom.service.base";

@Injectable()
export class StaffServiceCustomService extends StaffServiceCustomServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
