import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class User{
        @PrimaryGeneratedColumn('increment')
        id:number
        @Column()
        lastname: String
        @Column()
        firstname: String
        @Column()
        age: number
        
        /*constructor (id:number,lastname:String, firstname:String, age:number){
            this.id=id
            this.lastname=lastname
            this.firstname=firstname
            this.age=age
            
        }*/
}