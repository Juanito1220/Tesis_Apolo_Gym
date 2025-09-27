import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
  Logger,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  private readonly logger = new Logger(JwtAuthGuard.name);

  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    this.logger.log(`🛡️  JWT Guard activated for ${request.method} ${request.url}`);
    this.logger.log(`🔐 Authorization header: ${authHeader ? 'EXISTS' : 'MISSING'}`);

    if (authHeader) {
      this.logger.log(`📋 Auth header value: ${authHeader.substring(0, 20)}...`);
    }

    return super.canActivate(context);
  }

  handleRequest(err: any, user: any, info: any) {
    this.logger.log(`🔍 HandleRequest - Error: ${err ? err.message : 'NONE'}`);
    this.logger.log(`👤 HandleRequest - User: ${user ? JSON.stringify(user) : 'NULL'}`);
    this.logger.log(`ℹ️  HandleRequest - Info: ${info ? JSON.stringify(info) : 'NULL'}`);

    if (err || !user) {
      this.logger.error(`❌ Authentication failed: ${err?.message || 'No user found'}`);
      throw err || new UnauthorizedException('Token validation failed');
    }

    this.logger.log(`✅ Authentication successful for user: ${user.email}`);
    return user;
  }
}
