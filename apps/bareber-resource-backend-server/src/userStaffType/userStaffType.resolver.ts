import * as graphql from "@nestjs/graphql";
import { UserStaffTypeResolverBase } from "./base/userStaffType.resolver.base";
import { UserStaffType } from "./base/UserStaffType";
import { UserStaffTypeService } from "./userStaffType.service";

@graphql.Resolver(() => UserStaffType)
export class UserStaffTypeResolver extends UserStaffTypeResolverBase {
  constructor(protected readonly service: UserStaffTypeService) {
    super(service);
  }
}
