import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ServiceStaffTypeServiceBase } from "./base/serviceStaffType.service.base";

@Injectable()
export class ServiceStaffTypeService extends ServiceStaffTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
