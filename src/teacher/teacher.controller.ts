import { Controller , Get, Post, Put} from '@nestjs/common';

@Controller('teacher')
export class TeacherController {
    @Get()
    getTeachers(){
       return ("all teachers")
   }

}
