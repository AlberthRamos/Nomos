import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { User } from './User';

@Entity('products')
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 255 })
    nome: string;

    @Column({ type: 'text', nullable: true })
    descricao: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    preco: number;

    @Column({ type: 'varchar', length: 255, name: 'url_imagem', nullable: true })
    url_imagem: string;

    @Column({ type: 'int', name: 'quantidade_em_estoque', default: 0 })
    quantidade_em_estoque: number;

    @ManyToOne(() => User, user => user.products, { nullable: false })
    user: User;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
