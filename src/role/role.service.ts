import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Entity, Repository } from 'typeorm';
import { Role } from './role.entity';

@Injectable()
export class RoleService {
    constructor(
        @InjectRepository(Role)
        private roleRepository: Repository<Role>
    ) {}
    async create(name: string, idUser: number, idAssociation:number): Promise<Role>{
        const ass =  this.roleRepository.create({ 
            name: name,
            idUser:idUser,
            idAssociation: idAssociation
        })
        return await this.roleRepository.save(ass)
    }
    async getById(idUser:number, idAssociation:number): Promise<Role> {
        return await this.roleRepository.findOne({
            where: {
                idUser: idUser,
                idAssociation: idAssociation,
            }
        })
    }
    async update(idUser:number, idAssociation:number,name:string):Promise<Role>{
        const P= await this.getById(idUser,idAssociation)
        if(name){
            P.name=name;
        }
            return await this.roleRepository.save(P)
    }
    async delete(idUser:number, idAssociation):Promise<String>{
        await this.roleRepository.delete({idUser: idUser , idAssociation:idAssociation})
            return "Suppression effectuée"
    }


}
