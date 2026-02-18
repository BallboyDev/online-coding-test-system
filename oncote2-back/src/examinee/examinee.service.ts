import { Injectable } from '@nestjs/common';
import { CreateExamineeDto } from './dto/create-examinee.dto';
import { Examinee, ExamineeDocument } from './schemas/examinee.schemas';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class ExamineeService {
  constructor(
    @InjectModel(Examinee.name) private examineeModel: Model<ExamineeDocument>,
  ) { }

  async findAll(): Promise<Examinee[]> {
    return this.examineeModel.find().exec();
  }

  async regist(createExamineeDto: CreateExamineeDto) {
    const maxIndex = await this.examineeModel
      .findOne()
      .sort({ index: -1 })
      .exec()

    createExamineeDto['index'] = (maxIndex?.index || 0) + 1

    const result = new this.examineeModel(createExamineeDto);
    return await result.save();
  }

  async remove(id: number) {
    return await this.examineeModel.deleteOne({ index: id }).exec();
  }
}
