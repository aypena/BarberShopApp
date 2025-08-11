import * as graphql from "@nestjs/graphql";
import { StaffCustomServiceResolverBase } from "./base/staffCustomService.resolver.base";
import { StaffCustomService } from "./base/StaffCustomService";
import { StaffCustomServiceService } from "./staffCustomService.service";

@graphql.Resolver(() => StaffCustomService)
export class StaffCustomServiceResolver extends StaffCustomServiceResolverBase {
  constructor(protected readonly service: StaffCustomServiceService) {
    super(service);
  }
}
