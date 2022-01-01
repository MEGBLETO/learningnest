import {Controller, Get, Param, Post, Body, Put} from '@nestjs/common'



@Controller('students')
export class StudentController{
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

    @Post('')
    Addastudent(
        @Param() params: {id: string}
    ){
        //console.log(params.id)
        return "i'am a newly added student"
    }

}