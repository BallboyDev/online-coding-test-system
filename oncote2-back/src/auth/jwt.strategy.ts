/**
 * 로그인이 필요한 API에 접근할 때, 요청 헤더의 Authorization에 담긴 jwt를 검증하는 전략
 * AuthGuard('jwt')에 의해 사용된다.
 * 
 * 1. 요청 헤더에서 Bearer <token> 형식의 JWT를 추출한다.
 * 2. jwtConstants.secret을 사용해 토큰의 서명이 유효한지, 만료되지는 않았는지 검증한다.
 * 3. 검증이 성공하면 토큰의 payload를 validate 메서드에 전달한다.
 * 4. validate 메서드는 payload의 정보를 바탕으로 DB에서 사용자 정보를 조회하는 등 추가 작업을 할 수 있다. 여기서 반환된 값은 요청 객체에 저장된다.
 */

import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { jwtConstants } from "./constants";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            // JWT 추출 방법 설정: Authoriztion 헤더에서 Bearer 토큰을 추출
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            // 만료된 토큰을 거부할 지 여부: false로 설정하면, passport가 만료 여부를 직접 확인
            ignoreExpiration: false,
            // JWT 서명에 사용할 비밀 키
            secretOrKey: jwtConstants.secret,
        })
    }

    /**
     * 이 validate 메서드는 Passport가 JWT 검증을 마친 후 호출된다.
     * 검증이 완료된 JWT의 payload가 이 메서드의 인자로 전달된다.
     * 여기서 반환된 값은 req.user에 저장된다.
     */
    async validate(payload: any) {
        // payload로 부터 사용자 정보를 DB에서 한번더 조회하거나 정보를 조합하여 반환할 수 있다.
        return { userId: payload.id, email: payload.sub }
    }
}