import * as graphql from "@nestjs/graphql";
import { StaffTypeResolverBase } from "./base/staffType.resolver.base";
import { StaffType } from "./base/StaffType";
import { StaffTypeService } from "./staffType.service";

@graphql.Resolver(() => StaffType)
export class StaffTypeResolver extends StaffTypeResolverBase {
  constructor(protected readonly service: StaffTypeService) {
    super(service);
  }
}
