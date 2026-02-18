export class CreateUserDto {
    readonly id: string;
    readonly password: string;
    readonly email: string;
    readonly name: string;
    auth: 1 | 2 | 3;
}