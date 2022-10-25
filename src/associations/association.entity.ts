export class Association{
    id:number
    idUsers: number[]
    name: String

    constructor(id:number, idUsers: number[], name: String){
        this.id=id
        this.idUsers=idUsers
        this.name=name
    }
}