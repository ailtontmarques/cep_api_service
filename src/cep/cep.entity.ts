import {
    Entity, Column, PrimaryGeneratedColumn
} from 'typeorm';

@Entity()
export class Cep {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cep: string;
    
    @Column()
    logradouro: string;

    @Column()
    localidade: string;

    @Column()
    id_municipio: number;

    @Column({ nullable: true })
    nome_municipio: string;

    @Column()
    sigla_uf: string;
}
