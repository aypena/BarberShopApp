import { Module } from "@nestjs/common";
import { RoleModule } from "./role/role.module";
import { UserModule } from "./user/user.module";
import { UserRoleModule } from "./userRole/userRole.module";
import { StaffTypeModule } from "./staffType/staffType.module";
import { UserStaffTypeModule } from "./userStaffType/userStaffType.module";
import { ServiceEntityModule } from "./serviceEntity/serviceEntity.module";
import { ServiceStaffLinkModule } from "./serviceStaffLink/serviceStaffLink.module";
import { StaffCustomServiceModule } from "./staffCustomService/staffCustomService.module";
import { ClientModule } from "./client/client.module";
import { AppointmentModule } from "./appointment/appointment.module";
import { AppointmentServiceItemModule } from "./appointmentServiceItem/appointmentServiceItem.module";
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
    RoleModule,
    UserModule,
    UserRoleModule,
    StaffTypeModule,
    UserStaffTypeModule,
    ServiceEntityModule,
    ServiceStaffLinkModule,
    StaffCustomServiceModule,
    ClientModule,
    AppointmentModule,
    AppointmentServiceItemModule,
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
