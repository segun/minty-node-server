import { Column, Entity, Index, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity("sample")
@Unique("email_uniq", ["email"])
export class Sample {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    email: string;
    @Column()
    name: string;
    @Column()
    age: number;
    @Index('location-idx')
    @Column()
    location: string;
}