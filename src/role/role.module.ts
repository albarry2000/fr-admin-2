import { Module } from '@nestjs/common';
import { User } from 'src/users/user.entity';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Association } from 'src/associations/association.entity';
import { Role } from './role.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Role]),Association, User],
  providers: [RoleService],
  controllers: [RoleController]
})
export class RoleModule {}
