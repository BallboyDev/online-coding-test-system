import { Module } from '@nestjs/common';
import { ExamineeService } from './examinee.service';
import { ExamineeController } from './examinee.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Examinee, ExamineeSchema } from './schemas/examinee.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Examinee.name, schema: ExamineeSchema },
    ]),
  ],
  controllers: [ExamineeController],
  providers: [ExamineeService],
})
export class ExamineeModule {}
