import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { CepService } from './cep.service';
import { Cep } from './cep.entity';

@Controller('cep')
export class CepController {
    constructor(private readonly cepService: CepService) {}

    @Post()
    create(@Body() cep: Cep): Promise<Cep> {
        return this.cepService.create(cep);
    }

    @Get()
    findAll(): Promise<Cep[]> {
        return this.cepService.findAll();
    }

    @Get(':cep')
    findOne(@Param('cep') cep: string): Promise<Cep> {
        return this.cepService.findOne(cep);
    }
}
