import * as graphql from "@nestjs/graphql";
import { ServiceEntityResolverBase } from "./base/serviceEntity.resolver.base";
import { ServiceEntity } from "./base/ServiceEntity";
import { ServiceEntityService } from "./serviceEntity.service";

@graphql.Resolver(() => ServiceEntity)
export class ServiceEntityResolver extends ServiceEntityResolverBase {
  constructor(protected readonly service: ServiceEntityService) {
    super(service);
  }
}
