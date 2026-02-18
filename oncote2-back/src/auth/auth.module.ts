import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';

/**
 * AuthService가 필요로 하는 UserService와 JwtService를 사용할 수 있도록 모듈 설정을 업데이트 한다.
 */

@Module({
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret, // 비밀키
      signOptions: { expiresIn: '60m' } // 토큰 만료 시간
    })
  ]
})
export class AuthModule { }