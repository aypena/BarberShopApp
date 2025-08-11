import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ServiceEntityServiceBase } from "./base/serviceEntity.service.base";

@Injectable()
export class ServiceEntityService extends ServiceEntityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
