import { Controller, Post, UseGuards, Request, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { LoginDto } from './dto/login.dto';

/** Controller는 인증과 관련된 API 엔트포인트를 정의한다. */

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  /**
   * 1. 클라이언트가 POST /auth/login으로 LoginDto 형식의 데이터를 보낸다.
   * 2. @UseGuards(AuthGuard('local'))가 요청을 가로챈다.
   * 3. AuthGuard는 LocalStrategy를 찾아 실행시킨다.
   * 4. LocalStrategy는 요청 본문의 id와 password를 가져와 authService.validateUser()를 호출한다.
   * 5. validateUser가 사용자 정보를 성공적으로 반환하면, AuthGuard는 요청 객체(req)에 user 속성으로 해당 정보를 첨부하고 요청을 login 메서드로 통과시킨다.
   * 6. login 메서드는 req.user에 담긴 사용자 정보로 authService.login()을 호출하여 JWT를 생성하고 반환합니다.
   * 7. 만약 validateUser가 null이나 예외를 반환하면, AuthGuard는 자동으로 401 Unauthorized 에러를 발생시키고 요청을 차단한다.
   */

  /**
   * @UseGuards(AuthGuard('local'))
   * 'local' Strategy를 사용하는 AuthGuard를 적용한다.
   * 이 Guard가 LocalStrategy를 트리커하여 유저 인증을 처리한다.
   */

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req, @Body() loginDto: LoginDto) {
    return this.authService.login(req.user)
  }
}
