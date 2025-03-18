import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cep } from './cep.entity';

@Injectable()
export class CepService {
    constructor(
        @InjectRepository(Cep)
        private cepsRepository: Repository<Cep>,
    ) {}

    create(cep: Cep): Promise<Cep> {
        return this.cepsRepository.save(cep);
    }

    findAll(): Promise<Cep[]> {
        return this.cepsRepository.find();
    }

    findOne(cep: string): Promise<Cep> {
        return this.cepsRepository.findOneBy({ cep })
    }
}
