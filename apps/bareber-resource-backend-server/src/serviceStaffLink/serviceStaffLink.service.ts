import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ServiceStaffLinkServiceBase } from "./base/serviceStaffLink.service.base";

@Injectable()
export class ServiceStaffLinkService extends ServiceStaffLinkServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
