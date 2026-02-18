/**
 * AuthGuard('local')에 의해 호출되며, HTTP 요청 본문(body)의 id와 password를 AuthService의 validateUser 메서드에 전달하여 사용자 인증을 처리하는 '전략'이다.
 */

import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";
import { Injectable, UnauthorizedException } from "@nestjs/common";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super({ usernameField: 'id' })
    }

    async validate(id: string, password: string): Promise<any> {
        const user = await this.authService.validateUser(id, password)

        if (!user) {
            // validateUser에서 null을 반환하면, passport는 이 예외를 던쳐 클라인트에게 401 Unauthorized 에러를 응답한다.
            throw new UnauthorizedException()
        }

        return user
    }
}