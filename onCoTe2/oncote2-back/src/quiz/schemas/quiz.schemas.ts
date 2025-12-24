import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type QuizDocument = HydratedDocument<Quiz>;

@Schema()
export class Quiz {
    @Prop({ required: true, unique: true })
    index: number;

    @Prop({ required: true })
    title: string;

    @Prop()
    description: string;

    @Prop({ required: true })
    content: string;

    @Prop({ required: true })
    language: number[];

    @Prop({ required: true })
    level: number;

    @Prop({ required: true })
    answer: string;

}

export const QuizSchema = SchemaFactory.createForClass(Quiz);