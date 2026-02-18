import { Quiz } from "src/quiz/schemas/quiz.schemas";

class DatePriod {
    start: Date;
    end: Date
}

export class CreateExamDto {
    index: number;
    title: string;
    description: string;
    count: number;
    quizList: Quiz[];
    period: DatePriod;
}
