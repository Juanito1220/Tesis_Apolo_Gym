import { Test, TestingModule } from '@nestjs/testing';
import { MsUsersController } from './ms-users.controller';
import { MsUsersService } from './ms-users.service';

describe('MsUsersController', () => {
  let msUsersController: MsUsersController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MsUsersController],
      providers: [MsUsersService],
    }).compile();

    msUsersController = app.get<MsUsersController>(MsUsersController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(msUsersController.getHello()).toBe('Hello World!');
    });
  });
});
