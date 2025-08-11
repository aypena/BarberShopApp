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
import { StaffServiceCustomController } from "../staffServiceCustom.controller";
import { StaffServiceCustomService } from "../staffServiceCustom.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  duracionCustomMinutos: 42,
  id: "exampleId",
  precioCustom: 42.424242424,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  duracionCustomMinutos: 42,
  id: "exampleId",
  precioCustom: 42.424242424,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    duracionCustomMinutos: 42,
    id: "exampleId",
    precioCustom: 42.424242424,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  duracionCustomMinutos: 42,
  id: "exampleId",
  precioCustom: 42.424242424,
  updatedAt: new Date(),
};

const service = {
  createStaffServiceCustom() {
    return CREATE_RESULT;
  },
  staffServiceCustoms: () => FIND_MANY_RESULT,
  staffServiceCustom: ({ where }: { where: { id: string } }) => {
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

describe("StaffServiceCustom", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: StaffServiceCustomService,
          useValue: service,
        },
      ],
      controllers: [StaffServiceCustomController],
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

  test("POST /staffServiceCustoms", async () => {
    await request(app.getHttpServer())
      .post("/staffServiceCustoms")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /staffServiceCustoms", async () => {
    await request(app.getHttpServer())
      .get("/staffServiceCustoms")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /staffServiceCustoms/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/staffServiceCustoms"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /staffServiceCustoms/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/staffServiceCustoms"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /staffServiceCustoms existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/staffServiceCustoms")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/staffServiceCustoms")
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
