import { Test, TestingModule } from "@nestjs/testing";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { User } from "./Entities/userEntity.type";
import { Client_Details } from "./Entities/ClientEntity";
import { getRepositoryToken } from "@nestjs/typeorm";

describe("AppController", () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        AppService,
        {
          provide: getRepositoryToken(Client_Details),
          useValue: jest.fn((x) => x),
        },
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  describe("getUser", () => {
    it("should return mockobjectArray", async () => {
      const mockObject: User[] = [
        { username: "venkat", age: 24, email: "venkat@gmail.com" },
        { username: "Raja", age: 24, email: "raja@gmail.com" },
        { username: "surya", age: 24, email: "surya@gmail.com" },
        { username: "muthu", age: 24, email: "muthu@gmail.com" },
        { username: "bharath", age: 24, email: "bharath@gmail.com" },
      ];

      jest.spyOn(appService, "fetchUsers").mockReturnValue(mockObject);

      const result = await appController.fetchUsers();
      expect(result).toEqual(mockObject);
      expect(appService.fetchUsers).toHaveBeenCalledWith();
    });
  });
});
