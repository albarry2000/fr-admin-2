import { User } from 'src/users/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany,JoinTable  } from 'typeorm';
@Entity()
export class Association{
    @PrimaryGeneratedColumn('increment')
    id:number
    @Column()
    name: String
    @ManyToMany(type => User)
    @JoinTable()
    users: Promise<User[]>
    
    /*constructor (id:number,name:String, users:Promise<User[]>){
        this.id=id
        this.name=name
        this.users=users
        
    }*/



}