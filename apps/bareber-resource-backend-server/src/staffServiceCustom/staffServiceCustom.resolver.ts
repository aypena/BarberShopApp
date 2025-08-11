import * as graphql from "@nestjs/graphql";
import { StaffServiceCustomResolverBase } from "./base/staffServiceCustom.resolver.base";
import { StaffServiceCustom } from "./base/StaffServiceCustom";
import { StaffServiceCustomService } from "./staffServiceCustom.service";

@graphql.Resolver(() => StaffServiceCustom)
export class StaffServiceCustomResolver extends StaffServiceCustomResolverBase {
  constructor(protected readonly service: StaffServiceCustomService) {
    super(service);
  }
}
