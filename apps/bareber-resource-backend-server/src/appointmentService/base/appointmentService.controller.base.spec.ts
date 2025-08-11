import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { AppointmentServiceController } from "../appointmentService.controller";
import { AppointmentServiceService } from "../appointmentService.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  duracionFinalMinutos: 42,
  estado: "exampleEstado",
  fechaAgregado: new Date(),
  id: "exampleId",
  notas: "exampleNotas",
  precioFinal: 42.424242424,
};
const CREATE_RESULT = {
  duracionFinalMinutos: 42,
  estado: "exampleEstado",
  fechaAgregado: new Date(),
  id: "exampleId",
  notas: "exampleNotas",
  precioFinal: 42.424242424,
};
const FIND_MANY_RESULT = [
  {
    duracionFinalMinutos: 42,
    estado: "exampleEstado",
    fechaAgregado: new Date(),
    id: "exampleId",
    notas: "exampleNotas",
    precioFinal: 42.424242424,
  },
];
const FIND_ONE_RESULT = {
  duracionFinalMinutos: 42,
  estado: "exampleEstado",
  fechaAgregado: new Date(),
  id: "exampleId",
  notas: "exampleNotas",
  precioFinal: 42.424242424,
};

const service = {
  createAppointmentService() {
    return CREATE_RESULT;
  },
  appointmentServices: () => FIND_MANY_RESULT,
  appointmentService: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("AppointmentService", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: AppointmentServiceService,
          useValue: service,
        },
      ],
      controllers: [AppointmentServiceController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /appointmentServices", async () => {
    await request(app.getHttpServer())
      .post("/appointmentServices")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        fechaAgregado: CREATE_RESULT.fechaAgregado.toISOString(),
      });
  });

  test("GET /appointmentServices", async () => {
    await request(app.getHttpServer())
      .get("/appointmentServices")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          fechaAgregado: FIND_MANY_RESULT[0].fechaAgregado.toISOString(),
        },
      ]);
  });

  test("GET /appointmentServices/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/appointmentServices"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /appointmentServices/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/appointmentServices"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        fechaAgregado: FIND_ONE_RESULT.fechaAgregado.toISOString(),
      });
  });

  test("POST /appointmentServices existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/appointmentServices")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        fechaAgregado: CREATE_RESULT.fechaAgregado.toISOString(),
      })
      .then(function () {
        agent
          .post("/appointmentServices")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
