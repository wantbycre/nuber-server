import { IsEmail } from "class-validator";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity()
class User extends BaseEntity {
    @PrimaryGeneratedColumn() id: number;

    @Column({ type: "text", unique: true })

    @IsEmail()
    email: string;

}

export default User;