import {Controller, Get, Param, Post, Body, Put} from '@nestjs/common'



@Controller('teacher/:teacherid/students')
export class StudentTeacherController{
   @Get()
    getStudents(){
        return "All the students"
    }

    @Get('/:id')
    getStudentdsbyId(
        @Param() params: {id: string}
    ){
        //console.log(params.id)
        return "i'am a single student id"
    }


}