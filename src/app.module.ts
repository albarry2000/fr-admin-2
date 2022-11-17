import { Module} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AssociationsModule } from './associations/associations.module';
import { User } from './users/user.entity';
import { Association } from './associations/association.entity';
import { AuthModule } from './auth/auth.module';

@Module({

  imports: [ 
    TypeOrmModule.forRoot({
     type: 'sqlite',
     database: 'mydatabase.db',
     entities: [User,Association],
     synchronize: true,
   }),
    UsersModule, AssociationsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
