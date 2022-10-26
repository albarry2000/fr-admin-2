import { Injectable } from '@nestjs/common';
import { User } from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';
import { Association } from './association.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AssociationsService {
    async getById(idfind:number): Promise<Association> {
        return await this.assRepository.findOne({where: {id: idfind}})

    }
    async getMembers(id:number): Promise<User>{
       return await this.service.getById(id)
    }
    async getAll(): Promise<Association[]>{
        return await this.assRepository.find();
    }
    async create(name: string, idUsers: number[]): Promise<Association>{
        const ass =  this.assRepository.create({ 
            name: name
        })
        if(idUsers){
            for(let i=0; i<idUsers.length;i++){
                (await ass.users)[i]=(await this.service.getById(idUsers[i]))
            }
        }
        return await this.assRepository.save(ass)
    }
    async update(id:number,name: string, idUsers:number[]):Promise<Association>{
        const P= await this.getById(id)
        await (await (P.users)).slice
        if(name){
            P.name=name;
        }
        if(idUsers){
            for(let i in idUsers){
                (await P.users).push(await this.service.getById (+i))
            }
        }
            return await this.assRepository.save(P)
    }
    async delete(id:number):Promise<String>{
        await this.assRepository.delete(id)
            return "Suppression effectuée"
    }
    constructor(
        private service: UsersService,
        @InjectRepository(Association)
        private assRepository: Repository<Association>
    ) {}

}
