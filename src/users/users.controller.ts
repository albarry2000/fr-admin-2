import { Controller, Get, Body, Param, Post, Put, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service'
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { UserInput } from './userinput';

@ApiTags('users')
@Controller('users')
export class UsersController {
    @Get(':id')
    async getById(@Param() parameter): Promise<User> {
        if (this.service.getById(parameter.id)) {
            return this.service.getById(parameter.id)
        }
        else{
            throw new HttpException(`Could not find a user with the id ${parameter.id}`, HttpStatus.NOT_FOUND)
        }

    }
    @Get()
    async getAll(): Promise<User[]>{
        return this.service.getAll();
    }

    @Post()
    @ApiCreatedResponse({
        description: 'The user has been successfully created.'
    })
    async create(@Body() input:UserInput): Promise<User>{
        return this.service.create(input.lastname, input.firstname,input.age)
    }
    @Put(':id')
    async update(
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
    async delete(@Param() parameter):Promise<String>{
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