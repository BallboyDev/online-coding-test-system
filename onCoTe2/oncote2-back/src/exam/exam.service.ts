import { Injectable } from '@nestjs/common';
import { CreateExamDto } from './dto/create-exam.dto';
import { UpdateExamDto } from './dto/update-exam.dto';
import { Exam } from './schemas/exam.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ExamService {
  constructor(
    @InjectModel(Exam.name) private examModel: Model<Exam>
  ) { }

  async create(createExamDto: CreateExamDto) {
    const index = await this.examModel.findOne().sort({ index: -1 }).exec()
    createExamDto.index = (index?.index || 0) + 1

    const result = new this.examModel(createExamDto)
    const res = await result.save();

    return { success: true, data: res };
  }

  findAll() {
    return this.examModel.find().exec()
  }

  findOne(id: number) {
    return `This action returns a #${id} exam`;
  }

  update(id: number, updateExamDto: UpdateExamDto) {
    return `This action updates a #${id} exam`;
  }

  remove(id: number) {
    return `This action removes a #${id} exam`;
  }
}
