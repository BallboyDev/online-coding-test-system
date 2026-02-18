import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt'

/**
 * 사용자로부터 받은 정보가 유효한지 검사
 * 유효하다면 JWT 토큰을 발급(login)
 */

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) { }

    // 사용자를 검증하는 메서드
    // ID 값을 사용해 UserService에서 사용자를 조회
    // 사용자가 존재하고 평문 비밀번호와 DB에 저장된 해쉬 비밀번호가 일치하는지 호가인
    // 비밀번호가 일치하면 사용자 정보를 반환, 그렇지 않으면 null 반환
    async validateUser(id: string, pw: string): Promise<any> {
        // 1. 아이디로 사용자 조회 (password 필드 포함)
        const user = await this.userService.findOneById(id);


        // 2. 사용자가 존재하고 비밀번호가 일치하는지 확인
        if (user && (await bcrypt.compare(pw, user.password))) {
            const { password, ...result } = user;
            return result
        }

        return null

    }


    // validateUser를 통해 검증된 사용자 정보를 바탕으로 JWT 페이로드를 구성
    // 페이로드에는 사용자를 식별할 수 있는 최소한의 정보를 담는다.
    // jwtService.sign 메서드를 사용해 페이로드를 서명하고 토큰을 생성한다.
    // 생성된 토큰을 access_token 이라는 키와 함께 객체로 반환
    async login(user: any) {
        // 3. JWT 페이로드 구성
        // sub는 토큰의 주체를 의미한다. 일반적으로 user._id를 사용한다.
        const payload = { id: user.id, sub: user._id || '_id' }

        // 4. JWT 생성 및 반환
        return { access_token: this.jwtService.sign(payload) }
    }
}
