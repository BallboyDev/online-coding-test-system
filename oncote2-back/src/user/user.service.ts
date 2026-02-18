import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

    async create(createUserDto: CreateUserDto): Promise<User> {
        const { id, password, ...restData } = createUserDto;

        // 1. 비밀번호 해싱
        const salt = await bcrypt.genSalt()
        const hashedPw = await bcrypt.hash(password, salt)

        // 2. 해싱된 비밀번호로 사용자 생성
        const createdUser = new this.userModel({
            id,
            password: hashedPw, // 평문 비밀번호 대신 해싱된 비밀번호 저장
            ...restData
        })

        return createdUser.save();

    }

    async findOneById(id: string): Promise<User> {
        const user = await this.userModel.findOne({ id }).exec()

        if (!user) {
            throw new NotFoundException(`User with id #${id} not found`)
        }

        return user
    }
}
