import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { AssociationsController } from './associations.controller';
import { AssociationsService } from './associations.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Association } from './association.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Association]),UsersModule],
  controllers: [AssociationsController],
  providers: [AssociationsService],
})
export class AssociationsModule {}
