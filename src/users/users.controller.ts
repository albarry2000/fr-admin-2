import { Controller,Get, Body, Post, Param, Put,Delete,HttpException,HttpStatus } from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service';
@Controller('users')
export class UsersController {
constructor(
    private service: UsersService
) {}
@Get()
getAll(): User[] {
    return this.service.getAll();
}
@Get(':id')
getById(@Param() parameter): User {
 
    if(this.service.getById(parameter.id)){
        return this.service.getById(parameter.id)
    }
    else{
        throw new HttpException(`Identifiant utilisateur introuvable ${parameter.id}`, HttpStatus.NOT_FOUND)
    }


}
@Post()
create(@Body() input: any): User {
    return this.service.create(input.firstname,input.lastname,input.age)
}
@Put(':id')
update(@Param() parameter,@Body() input: any):User {
    if(this.service.getById(parameter.id)){
        return this.service.update(parameter.id,input.firstname,input.lastname,input.age)
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
