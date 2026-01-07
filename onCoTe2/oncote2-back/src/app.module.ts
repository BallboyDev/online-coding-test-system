import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExamineeModule } from './examinee/examinee.module';
// import { CatsModule } from './cats/cats.module';
import { QuizModule } from './quiz/quiz.module';
import { ExamModule } from './exam/exam.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/oncote2'),
    ExamineeModule,
    QuizModule,
    ExamModule,
    // CatsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
