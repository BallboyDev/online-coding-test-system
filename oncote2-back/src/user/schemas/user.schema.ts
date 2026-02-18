import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type UserDocument = HydratedDocument<User>

@Schema()
export class User {

    @Prop({ required: true, unique: true })
    id: string;

    @Prop({ required: true, select: false })
    password: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    auth: 1 | 2 | 3;

    @Prop({ required: true })
    name: string;
}

export const UserSchema = SchemaFactory.createForClass(User)