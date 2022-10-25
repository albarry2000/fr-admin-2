import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

const users : User[] = [
    {
        id: 0,
        lastname: 'Doe',
        firstname: 'John',
        age: 23
    }
]
@Injectable()
export class UsersService {
    getAll(): User[] {
        return users;
    }
    getById(id:number): User {
        const result = users.filter(user => user.id===+id)
        return result[0]
    }
    create(firstname: String, lastname: String,age:number): User {
        const newUser= new User(users.length, firstname,lastname,age)
        users.push(newUser)
        return newUser
    }
    update(id:number,firstname: String, lastname: String,age:number):User {
        const result = users.filter(user => user.id===+id)
        if(firstname!== undefined){
            result[0].firstname=firstname
        }
        if(lastname!== undefined){
                result[0].lastname=lastname
        }
        if(age!== undefined){
            result[0].age=age
        }
        return result[0]
    
    }
    delete(id:number):Boolean{
        const index: number[]=[]
        for(let i=0;i<users.length;i++){
            index.push(users[i].id)
        }
        if(id in index){
            let position
            for(let i=0; i<users.length;i++){
                if(users[i].id===id){
                    position=i
                }
            }
            users.splice(position,1)
            return true
        }
        
    }
    
}
