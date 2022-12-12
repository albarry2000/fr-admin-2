import { Controller, Get, Body, Param, Post, Put, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { AssociationsService } from './associations.service';
import { Association } from './association.entity';
import { User } from 'src/users/user.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('associations')
@Controller('associations')
export class AssociationsController {
    @Get(':id')
    async getById(@Param() parameter): Promise<Association> {
        if (this.service.getById(parameter.id)) {
            return this.service.getById(parameter.id)
        }
        else{
            throw new HttpException(`Could not find a user with the id ${parameter.id}`, HttpStatus.NOT_FOUND)
        }

    }
    @Get()
    async getAll(): Promise<Association[]>{
        return this.service.getAll();
    }
    @Get(':id/members')
    async getMembers(@Param() parameter):Promise<User>{
        return this.service.getMembers(parameter.id)
    }

    @Post()
    async create(@Body() input: any): Promise<Association>{
        return this.service.create(input.name,input.idUsers)
    }
    @Put(':id')
    async update(@Param() parameter,@Body() input: any):Promise<Association> {
            if (this.service.update(parameter.id,input.name,input.idUsers)) {
                return this.service.update(parameter.id,input.name,input.idUsers)   
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
        private service: AssociationsService
    ) {}
}
