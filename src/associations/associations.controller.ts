import { Controller,Get, Body, Post, Param, Put,Delete,HttpException,HttpStatus } from '@nestjs/common';
import { User } from 'src/users/user.entity';
import { Association } from './association.entity';
import { AssociationsService } from './associations.service';
@Controller('associations')
export class AssociationsController {
    constructor(
        private service: AssociationsService
    ) {}
    @Get()
    getAll(): Association[] {
        return this.service.getAll();
    }
    @Get(':id')
    getById(@Param() parameter): Association {
     
        if(this.service.getById(parameter.id)){
            return this.service.getById(parameter.id)
        }
        else{
            throw new HttpException(`Identifiant utilisateur introuvable ${parameter.id}`, HttpStatus.NOT_FOUND)
        }
    
    
    }
    @Get(':id/members')
    getMembers(@Param() parameter): User[] {
        if(this.service.getById(parameter.id)){
            return this.service.getMembers(parameter.id)
        }
        else{
            throw new HttpException(`Identifiant utilisateur introuvable ${parameter.id}`, HttpStatus.NOT_FOUND)
        }
        
    }
    @Post()
    create(@Body() input: any): Association {
        return this.service.create(input.idUsers,input.name)
    }
    @Put(':id')
    update(@Param() parameter,@Body() input: any):Association {
        if(this.service.getById(parameter.id)){
            return this.service.update(parameter.id,input.idUsers,input.name)
        }
        else{
            throw new HttpException(`Identifiant utilisateur introuvable ${parameter.id}`, HttpStatus.NOT_FOUND)
        }
    
    
    }
    @Delete(':id')
    delete(@Param() parameter):Boolean{
        if(this.service.getById(parameter.id)){
            return this.service.delete(parameter.id)
        }
        else{
            throw new HttpException(`Identifiant utilisateur introuvable ${parameter.id}`, HttpStatus.NOT_FOUND)
        }
    }
}
