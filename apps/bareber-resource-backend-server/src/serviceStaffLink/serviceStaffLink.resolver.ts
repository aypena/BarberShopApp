import * as graphql from "@nestjs/graphql";
import { ServiceStaffLinkResolverBase } from "./base/serviceStaffLink.resolver.base";
import { ServiceStaffLink } from "./base/ServiceStaffLink";
import { ServiceStaffLinkService } from "./serviceStaffLink.service";

@graphql.Resolver(() => ServiceStaffLink)
export class ServiceStaffLinkResolver extends ServiceStaffLinkResolverBase {
  constructor(protected readonly service: ServiceStaffLinkService) {
    super(service);
  }
}
