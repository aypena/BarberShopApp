import * as graphql from "@nestjs/graphql";
import { ServiceStaffTypeResolverBase } from "./base/serviceStaffType.resolver.base";
import { ServiceStaffType } from "./base/ServiceStaffType";
import { ServiceStaffTypeService } from "./serviceStaffType.service";

@graphql.Resolver(() => ServiceStaffType)
export class ServiceStaffTypeResolver extends ServiceStaffTypeResolverBase {
  constructor(protected readonly service: ServiceStaffTypeService) {
    super(service);
  }
}
