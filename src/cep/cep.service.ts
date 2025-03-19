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
        return this.cepsRepository.createQueryBuilder('cep')
            .select(["cep, logradouro AS logradouro, '' AS complemento, '' AS unidade, localidade AS bairro, nome_municipio AS localidade, sigla_uf AS uf, '' AS estado, '' AS regiao, id_municipio AS ibge, '' AS gia, '' AS ddd, '' AS siafi"])
            .limit(100)
            .getRawMany();
            
    }

    findOne(_cep: string): Promise<Cep> {
        return this.cepsRepository.createQueryBuilder('cep')
            .select(["cep, logradouro AS logradouro, '' AS complemento, '' AS unidade, localidade AS bairro, nome_municipio AS localidade, sigla_uf AS uf, '' AS estado, '' AS regiao, id_municipio AS ibge, '' AS gia, '' AS ddd, '' AS siafi"])
            .where(`cep = '${ _cep }'`)
            .getRawOne();
    }
}
