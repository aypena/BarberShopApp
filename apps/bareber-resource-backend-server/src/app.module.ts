import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { RoleModule } from "./role/role.module";
import { UserRoleModule } from "./userRole/userRole.module";
import { StaffTypeModule } from "./staffType/staffType.module";
import { UserStaffTypeModule } from "./userStaffType/userStaffType.module";
import { ServiceModule } from "./service/service.module";
import { ServiceStaffTypeModule } from "./serviceStaffType/serviceStaffType.module";
import { StaffServiceCustomModule } from "./staffServiceCustom/staffServiceCustom.module";
import { ClientModule } from "./client/client.module";
import { AppointmentModule } from "./appointment/appointment.module";
import { AppointmentServiceModule } from "./appointmentService/appointmentService.module";
import { PaymentModule } from "./payment/payment.module";
import { SettingModule } from "./setting/setting.module";
import { AuditLogModule } from "./auditLog/auditLog.module";
import { NotificationModule } from "./notification/notification.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    UserModule,
    RoleModule,
    UserRoleModule,
    StaffTypeModule,
    UserStaffTypeModule,
    ServiceModule,
    ServiceStaffTypeModule,
    StaffServiceCustomModule,
    ClientModule,
    AppointmentModule,
    AppointmentServiceModule,
    PaymentModule,
    SettingModule,
    AuditLogModule,
    NotificationModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
