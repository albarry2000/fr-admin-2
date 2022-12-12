import { Entity, PrimaryGeneratedColumn , Column, OneToOne, JoinTable, ManyToMany} from "typeorm";
import { User } from 'src/users/user.entity';
import { Association } from 'src/associations/association.entity';
@Entity()
export class Role{
    @PrimaryGeneratedColumn('increment')
    id:number
    @Column()
    name: String
    @Column()
    idUser: number
    @Column()
    idAssociation: number


    
}