import { Injectable } from '@nestjs/common';
import { User } from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';
import { Association } from './association.entity';
const associations : Association[] = [
    {
        id: 0,
        idUsers:[0,1],
        name: 'Assoc1'
    }
]
@Injectable()
export class AssociationsService {
    constructor(
        private service: UsersService
    ) {}
    getAll(): Association[] {
        return associations;
    }
    getById(id:number): Association {
        const result = associations.filter(assos => assos.id===+id)
        return result[0]
    }
    getMembers(id:number): User[]{
        const assos= this.getById(id)
        const result :User[]=[]
        for(let i in assos.idUsers){
            result.push(this.service.getById(+i))
        }
        return result

    }
    create(idUsers: number[], name: String): Association {
        const newAssos= new Association(associations.length, idUsers,name)
        associations.push(newAssos)
        return newAssos
    }
    update(id:number,idUsers: number[], name: String):Association {
        const result = associations.filter(assos => assos.id===+id)
        if(idUsers!== undefined){
            result[0].idUsers=idUsers
        }
        if(name!== undefined){
                result[0].name=name
        }
        return result[0]
    
    }
    delete(id:number):Boolean{
     let position
    for(let i=0; i<associations.length;i++){
        if(associations[i].id===id){
            position=i
            }
        }
    if(associations.splice(position,1)[0]==associations[position]){
        return true
    }
    else{
        return false
    }
            
    }
        
}
