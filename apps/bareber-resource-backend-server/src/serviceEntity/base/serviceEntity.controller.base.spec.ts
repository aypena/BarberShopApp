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
import { ServiceEntityController } from "../serviceEntity.controller";
import { ServiceEntityService } from "../serviceEntity.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  activo: "true",
  categoria: "exampleCategoria",
  createdAt: new Date(),
  descripcion: "exampleDescripcion",
  duracionBaseMinutos: 42,
  id: "exampleId",
  nombre: "exampleNombre",
  precioBase: 42.424242424,
};
const CREATE_RESULT = {
  activo: "true",
  categoria: "exampleCategoria",
  createdAt: new Date(),
  descripcion: "exampleDescripcion",
  duracionBaseMinutos: 42,
  id: "exampleId",
  nombre: "exampleNombre",
  precioBase: 42.424242424,
};
const FIND_MANY_RESULT = [
  {
    activo: "true",
    categoria: "exampleCategoria",
    createdAt: new Date(),
    descripcion: "exampleDescripcion",
    duracionBaseMinutos: 42,
    id: "exampleId",
    nombre: "exampleNombre",
    precioBase: 42.424242424,
  },
];
const FIND_ONE_RESULT = {
  activo: "true",
  categoria: "exampleCategoria",
  createdAt: new Date(),
  descripcion: "exampleDescripcion",
  duracionBaseMinutos: 42,
  id: "exampleId",
  nombre: "exampleNombre",
  precioBase: 42.424242424,
};

const service = {
  createServiceEntity() {
    return CREATE_RESULT;
  },
  serviceEntities: () => FIND_MANY_RESULT,
  serviceEntity: ({ where }: { where: { id: string } }) => {
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

describe("ServiceEntity", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ServiceEntityService,
          useValue: service,
        },
      ],
      controllers: [ServiceEntityController],
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

  test("POST /serviceEntities", async () => {
    await request(app.getHttpServer())
      .post("/serviceEntities")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
      });
  });

  test("GET /serviceEntities", async () => {
    await request(app.getHttpServer())
      .get("/serviceEntities")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
        },
      ]);
  });

  test("GET /serviceEntities/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/serviceEntities"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /serviceEntities/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/serviceEntities"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
      });
  });

  test("POST /serviceEntities existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/serviceEntities")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/serviceEntities")
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
