import { Module } from "@nestjs/common";
import { ServiceEntityModuleBase } from "./base/serviceEntity.module.base";
import { ServiceEntityService } from "./serviceEntity.service";
import { ServiceEntityController } from "./serviceEntity.controller";
import { ServiceEntityResolver } from "./serviceEntity.resolver";

@Module({
  imports: [ServiceEntityModuleBase],
  controllers: [ServiceEntityController],
  providers: [ServiceEntityService, ServiceEntityResolver],
  exports: [ServiceEntityService],
})
export class ServiceEntityModule {}
