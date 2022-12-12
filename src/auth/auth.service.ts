import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private serviceU: UsersService,
        private jwtService: JwtService
    ) {}
     public async validateUser(id: number, password: string) : Promise<User> {
        const pass=password;
        const saltOrRounds = 10;
        const hash = await bcrypt.hash(pass, saltOrRounds);
        const ass = this.serviceU.getById(id)
        if(bcrypt.compare((await ass).password, hash)){
            return ass
        }
        else{
            return undefined
        }
    }
    async login(user: any) {
        const payload = { username: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

}
