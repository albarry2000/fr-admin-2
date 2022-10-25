import { Controller,Get, Body, Post, Param, Put,Delete } from '@nestjs/common';
import { User } from './user.entity';

const users : User[] = [
    {
        id: 0,
        lastname: 'Doe',
        firstname: 'John'
    }
]
@Controller('users')
export class UsersController {
@Get()
getAll(): User[] {
    return users;
}
@Get(':id')
getById(@Param() parameter): User {
    const result = users.filter(user => user.id===+parameter.id)
    return result[0]

}
@Post()
create(@Body() input: any): User {
    const newUser= new User(users.length, input.firstname,input.lastname)
    users.push(newUser)
    return newUser
}
@Put(':id')
update(@Param() parameter,@Body() input: any):User {
    const result = users.filter(user => user.id===+parameter.id)
    if(input.firstname!== undefined){
        result[0].firstname=input.firstname
    }
    if(input.lastname!== undefined){
        result[0].lastname=input.lastname
    }
    return result[0]

}
@Delete(':id')
delete(@Param() parameter):Boolean{
    let position
    for(let i=0; i<users.length;i++){
        if(users[i].id===+parameter.id){
            position=i
        }
    }
    users.splice(position,1)
    return true
}

}
