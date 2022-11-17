import { Injectable } from '@nestjs/common';
import { User } from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private serviceU: UsersService,
    ) {}
     public async validateUser(id: number, password: string) : Promise<User> {
        const ass = this.serviceU.getById(id)
        if((await ass).password== password){
            return ass
        }
        else{
            return undefined
        }
    }

}
