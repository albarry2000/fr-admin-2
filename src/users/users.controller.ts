import { Controller, Get, Body, Param, Post, Put, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service'
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
    @Get(':id')
    getById(@Param() parameter): Promise<User> {
        if (this.service.getById(parameter.id)) {
            return this.service.getById(parameter.id)
        }
        else{
            throw new HttpException(`Could not find a user with the id ${parameter.id}`, HttpStatus.NOT_FOUND)
        }

    }
    @Get()
    getAll(): Promise<User[]>{
        return this.service.getAll();
    }


    @Post()
    create(@Body() input: any): Promise<User>{
        return this.service.create(input.lastname, input.firstname,input.age)
    }
    @Put(':id')
    update(
        @Param() parameter,
        @Body() input: any):Promise<User> {
            if (this.service.update(input.firstname,input.lastname,input.age,parameter.id)) {
                return this.service.update(input.firstname,input.lastname,input.age,parameter.id)
            }
            else{
                throw new HttpException(`Could not find a user with the id ${parameter.id}`, HttpStatus.NOT_FOUND)
            }
    }

    @Delete(':id')
    delete(@Param() parameter):Promise<String>{
        if (this.service.delete(parameter.id)) {
            return this.service.delete(parameter.id)
        }
        else{
            throw new HttpException(`Could not find a user with the id ${parameter.id}`, HttpStatus.NOT_FOUND)
        }
    }
    constructor(
        private service: UsersService
    ) {}
}