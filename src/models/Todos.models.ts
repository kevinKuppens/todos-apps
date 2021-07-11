import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Todos{
    @PrimaryGeneratedColumn('increment')
    public id!:number;
    @Column()
    public title !: string;
}