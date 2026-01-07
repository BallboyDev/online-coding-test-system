import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { Quiz, QuizSchema } from '../../quiz/schemas/quiz.schemas';

export type ExamDocument = HydratedDocument<Exam>;

@Schema()
class Period {
    @Prop({ type: Date, default: null })
    start: Date;

    @Prop({ type: Date, default: null })
    end: Date;
}

const PeriodSchema = SchemaFactory.createForClass(Period);

@Schema()
export class Exam {
    @Prop({ required: true })
    index: number;

    @Prop({ required: true })
    title: string;

    @Prop({ type: String, default: null })
    description: string;

    @Prop({ required: true })
    count: number;

    @Prop({ type: [QuizSchema], default: [] })
    quizList: Types.DocumentArray<Quiz>;

    @Prop({ type: PeriodSchema, default: () => ({ start: null, end: null }) })
    period: Period;
}

export const ExamSchema = SchemaFactory.createForClass(Exam);
