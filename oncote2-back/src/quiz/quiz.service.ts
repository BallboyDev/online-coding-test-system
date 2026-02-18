import { Injectable } from '@nestjs/common';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Quiz } from './schemas/quiz.schemas';
import { Model } from 'mongoose';

@Injectable()
export class QuizService {
    constructor(
        @InjectModel(Quiz.name) private quizModel: Model<Quiz>,
    ) { }

    async findAll(): Promise<Quiz[]> {
        return this.quizModel.find().exec();
    }

    async findByQuery(query: string): Promise<Quiz[]> {
        // 타이틀, 설명, 난이도, 사용언어
        // const res = await this.quizModel.find({ "title": new RegExp(query, 'i') })
        const reg = new RegExp(query, 'i')
        return await this.quizModel.find(
            {
                $or: [
                    { "title": reg },
                    { "description": reg }
                ]
            }
        )
    }

    async create(createQuizDto: CreateQuizDto) {
        console.log('createQuizDto:', createQuizDto);

        const maxIndex = await this.quizModel.findOne().sort({ index: -1 }).exec();
        createQuizDto['index'] = (maxIndex?.index || 0) + 1;
        const result = new this.quizModel(createQuizDto);
        await result.save();

        return { success: true, data: createQuizDto };
    }

    async remove(ids: string) {
        const id = ids.split(',').map((v) => { return parseInt(v) })
        await this.quizModel.deleteMany({ "index": { $in: id } })

    }
}
