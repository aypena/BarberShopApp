import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserStaffTypeServiceBase } from "./base/userStaffType.service.base";

@Injectable()
export class UserStaffTypeService extends UserStaffTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
