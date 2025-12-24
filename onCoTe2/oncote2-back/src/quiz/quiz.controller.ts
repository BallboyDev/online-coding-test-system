import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {
    constructor(private readonly quizService: QuizService) { }

    @Get()
    async findAll() {
        return await this.quizService.findAll();
    }

    @Get('/search')
    async findByQuery(@Query('query') query: string) {
        return await this.quizService.findByQuery(query);
    }

    @Post()
    async create(@Body() createQuizDto: CreateQuizDto) {
        return await this.quizService.create(createQuizDto);
    }

    @Delete(':ids')
    async remove(@Param('ids') ids: string) {
        return await this.quizService.remove(ids)
    }

}
