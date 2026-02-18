import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ExamineeDocument = HydratedDocument<Examinee>;

@Schema()
export class Examinee {
    @Prop({ type: Number, required: true })
    index: number;

    @Prop({ type: String, required: true })
    name: string;

    @Prop({ type: String, required: true })
    email: string;

    @Prop({ type: String, required: true })
    password: string;

    @Prop({ type: String, required: true })
    phone: string;

    @Prop()
    group: string;
}

export const ExamineeSchema = SchemaFactory.createForClass(Examinee);
