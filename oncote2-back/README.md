1. 의존성 설치: @nestjs/passport, @nestjs/jwt, passport, passport-jwt, bcrypt 패키지를 설치합니다.
2. `Auth` 모듈 및 기본 파일 생성: nest g module auth, nest g controller auth, nest g service auth 명령어를 사용합니다.
3. `User` 스키마 및 서비스 수정: 비밀번호 필드 추가 및 해싱 로직을 구현합니다.
4. `AuthService` 구현: 사용자 검증 및 JWT 생성 로직을 작성합니다.
5. `AuthController` 구현: /login 엔드포인트를 작성합니다.
6. JWT Strategy 및 `AuthGuard` 구현: 인증 전략과 경로 보호 가드를 작성합니다.
7. 전체 모듈 통합: 각 모듈(AuthModule, MemberModule)에 필요한 설정(imports, providers)을 추가합니다.