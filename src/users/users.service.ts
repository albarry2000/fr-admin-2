import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>
        ) {}
    async getAll(): Promise<User[]>{
        return await this.usersRepository.find();
    }
    async getById(idfind:number): Promise<User> {
        return await this.usersRepository.findOne({where: {id: idfind}})

    }
    async create(lastname: string, firstname: string, age: number): Promise<User>{
        const newUser = await this.usersRepository.create({ 
            lastname: lastname, 
            firstname: firstname, 
            age: age
        })
        return await this.usersRepository.save(newUser)
    }
    async update(lastname: string, firstname: string, age: number,id:number):Promise<User>{
        const P= await this.getById(id)
        if(lastname){
            P.lastname=lastname;
        }
        if(firstname){
            P.firstname=firstname
        }
        if(age){
            P.age=age
        }
        return await this.usersRepository.save(P)
    
    }
    async delete(idfind:number):Promise<String>{
        await this.usersRepository.delete(idfind)
        return "OK"
    }

           
}
    
    
