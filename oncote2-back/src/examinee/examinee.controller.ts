import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { ExamineeService } from './examinee.service';
import { CreateExamineeDto } from './dto/create-examinee.dto';

@Controller('examinee')
export class ExamineeController {
  constructor(private readonly examineeService: ExamineeService) { }

  @Get()
  async findAll() {
    return this.examineeService.findAll();
  }

  @Post()
  async regist(@Body() createExamineeDto: CreateExamineeDto) {
    return await this.examineeService.regist(createExamineeDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.examineeService.remove(id);
  }
}
