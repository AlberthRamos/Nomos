import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Product } from './Product';

export type UserRole = 'admin' | 'owner' | 'viewer';
export type UserPlan = 'gratuito' | 'pago';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', unique: true })
    email: string;

    @Column({ type: 'varchar' })
    password_hash: string;

    @Column({
        type: 'enum',
        enum: ['admin', 'owner', 'viewer'],
        default: 'owner'
    })
    role: UserRole;

    @Column({
        type: 'enum',
        enum: ['gratuito', 'pago'],
        default: 'gratuito'
    })
    plan: UserPlan;

    @OneToMany(() => Product, product => product.user)
    products: Product[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
