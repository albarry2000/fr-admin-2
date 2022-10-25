import { Controller,Get, Body, Post, Param } from '@nestjs/common';
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

}
