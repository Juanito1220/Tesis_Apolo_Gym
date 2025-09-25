import { Test, TestingModule } from '@nestjs/testing';
import { MsAuthController } from './ms-auth.controller';
import { MsAuthService } from './ms-auth.service';

describe('MsAuthController', () => {
  let controller: MsAuthController;
  let service: jest.Mocked<MsAuthService>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MsAuthController],
      providers: [
        {
          provide: MsAuthService,
          useValue: {
            register: jest.fn(),
            login: jest.fn(),
            refresh: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<MsAuthController>(MsAuthController);
    service = module.get(MsAuthService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('register', () => {
    it('debe delegar en MsAuthService.register y retornar su resultado', async () => {
      const dto = {
        email: 'admin@apolo.local',
        password: 'Secr3t!!',
        role: 'ADMIN',
      };
      const result = {
        user: {
          id: 'uuid-1',
          email: dto.email,
          role: 'ADMIN',
          createdAt: '2025-09-24T00:00:00.000Z',
          updatedAt: '2025-09-24T00:00:00.000Z',
        },
        access_token: 'access-token',
        refresh_token: 'refresh-token',
      };
      service.register.mockResolvedValue(result as any);

      await expect(controller.register(dto as any)).resolves.toBe(result);
      expect(service.register).toHaveBeenCalledTimes(1);
      expect(service.register).toHaveBeenCalledWith(dto);
    });
  });

  describe('login', () => {
    it('debe delegar en MsAuthService.login y retornar su resultado', async () => {
      const dto = { email: 'admin@apolo.local', password: 'Secr3t!!' };
      const result = {
        user: { id: 'uuid-1', email: dto.email, role: 'ADMIN' },
        access_token: 'access-token',
        refresh_token: 'refresh-token',
      };
      service.login.mockResolvedValue(result as any);

      await expect(controller.login(dto as any)).resolves.toBe(result);
      expect(service.login).toHaveBeenCalledWith(dto);
    });
  });

  describe('profile', () => {
    it('debe retornar el payload de req.user', () => {
      const req = {
        user: { sub: 'uuid-1', email: 'admin@apolo.local', role: 'ADMIN' },
      } as any;
      expect(controller.profile(req)).toEqual(req.user);
    });
  });

  describe('refresh', () => {
    it('debe delegar en MsAuthService.refresh con req.user y retornar nuevos tokens', async () => {
      const req = {
        user: { sub: 'uuid-1', email: 'admin@apolo.local', role: 'ADMIN' },
      } as any;
      const result = {
        access_token: 'new-access',
        refresh_token: 'new-refresh',
      };
      service.refresh.mockResolvedValue(result as any);

      await expect(controller.refresh(req)).resolves.toBe(result);
      expect(service.refresh).toHaveBeenCalledWith(req.user);
    });
  });

  describe('adminOnly', () => {
    it('debe retornar ok para admins (la validación de rol la prueban los guards, no el controller)', () => {
      expect(controller.adminOnly()).toEqual({ ok: true, msg: 'solo admins' });
    });
  });
});
