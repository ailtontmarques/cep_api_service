import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cep } from './cep.entity';
import { CepService } from './cep.service';
import { CepController } from './cep.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Cep])
  ],
  providers: [CepService],
  controllers: [CepController]
})
export class CepModule {}
