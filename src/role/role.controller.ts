import { Controller, Get, Body, Param, Post, Put, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { Role } from './role.entity';
import { RoleInput } from './role.input';
import { RoleService } from './role.service';
import { RoleUpdate } from './role.update';
@Controller('role')
export class RoleController {
    constructor(
        private service: RoleService
    ) {}
    @Get(':idUser/:idAssociation')
    async getById(@Param() parameter): Promise<Role> {
        try {
            return await this.service.getById(parameter.idUser, parameter.idAssociation);
          } catch (e) {
            throw new HttpException(`Could not find a user with the id ${parameter.id}`, HttpStatus.NOT_FOUND)
          }
                   
    }
    @Post()
    async create(@Body() input:RoleInput): Promise<Role>{
        return this.service.create(input.idUser, input.idAssociation,input.name)
    }
    @Put(':idUser/:idAssociation')
    async update(@Param() parameter,@Body() input: RoleUpdate):Promise<Role> {
            if (this.service.update(parameter.idUser,parameter.idAssociation,input.name)) {
                return this.service.update(parameter.idUser,parameter.idAssociation,input.name)   
            }
            else{
                throw new HttpException(`Could not find a user with the id ${parameter.id}`, HttpStatus.NOT_FOUND)
            }
    }

    @Delete(':idUser/:idAssociation')
    async delete(@Param() parameter):Promise<String>{
        if (this.service.delete(parameter.idUser, parameter.idAssociation)) {
            return this.service.delete(parameter.idUser, parameter.idAssociation)
        }
        else{
            throw new HttpException(`Could not find a user with the id ${parameter.id}`, HttpStatus.NOT_FOUND)
        }
    }

}
