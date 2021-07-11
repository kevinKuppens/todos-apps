import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";

@Entity()
export default class Todos{
    @PrimaryGeneratedColumn('increment')
    public id!:number;
    @Column()
    public title !: string;
    @Column()
    public description ?: string
    // @ManyToOne(() => UsersModel, (user) => user.todo )
}