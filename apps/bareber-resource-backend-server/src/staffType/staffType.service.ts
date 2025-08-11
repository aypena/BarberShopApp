import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StaffTypeServiceBase } from "./base/staffType.service.base";

@Injectable()
export class StaffTypeService extends StaffTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
