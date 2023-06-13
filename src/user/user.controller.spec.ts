import { Test, TestingModule } from "@nestjs/testing";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

describe("UserController", () => {
  let userController: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    userController = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
  });
  describe("getUser", () => {
    it("should return mockobjectArray", async () => {
      const mockObject = [
        { username: "venkat", age: 24, email: "venkat@gmail.com" },
        { username: "Raja", age: 24, email: "raja@gmail.com" },
        { username: "surya", age: 24, email: "surya@gmail.com" },
        { username: "muthu", age: 24, email: "muthu@gmail.com" },
        { username: "bharath", age: 24, email: "bharath@gmail.com" },
      ];

      jest.spyOn(userService, "fetchUsers").mockReturnValue(mockObject);

      // expect(appController.fetchUsers()).toBe(mockObject);

      const result = await userController.fetchUsers();
      expect(result).toBe(mockObject);
      expect(userService.fetchUsers).toHaveBeenCalledWith();
    });
  });
});
