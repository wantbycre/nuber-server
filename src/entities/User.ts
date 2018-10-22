// TODO: 니콜라스는 bcrypt 사용함 window에서 bcrypt 설치가 안되는바람에 임시로 사용
// TODO: 맥으로 옮긴다면 사용
// TODO: yarn global add node-gyp 
// TODO: yarn global add bcrypt
import bcrypt from "bcrypt-nodejs";
import { IsEmail } from "class-validator";
import { 
    BaseEntity, 
    BeforeInsert, 
    BeforeUpdate,
    Column, 
    CreateDateColumn, 
    Entity, 
    PrimaryGeneratedColumn, 
} from "typeorm";

const BCRYPT_ROUNDS = 10;

@Entity()
class User extends BaseEntity {
    @PrimaryGeneratedColumn() id: number;

    @Column({ type: "text", unique: true })

    @IsEmail()
    email: string;

    @Column({ type: "boolean", default: false})
    verifiedEmail: boolean;

    @Column({ type: "text"})
    firstName: string;

    @Column({ type: "text"})
    lastName: string;

    @Column({ type: "int"})
    age: number;

    @Column({ type: "text"})
    password: string;

    @Column({ type: "text"})
    phoneNumber: string;

    @Column({ type: "boolean", default: false})
    verifiedPhoneNumber: boolean;

    @Column({ type: "text"})
    profilePhoto: string;
    
    @Column({ type: "boolean", default: false})
    isDriving: boolean;
    
    @Column({ type: "boolean", default: false})
    isRiding: boolean;
    
    @Column({ type: "boolean", default: false})
    isTaken: boolean;
    
    @Column({ type: "double precision", default: 0})
    lastLng: number;
    
    @Column({ type: "double precision", default: 0})
    lastLat: number;
    
    @Column({ type: "double precision", default: 0})
    lastOrientation: number;
    
    @CreateDateColumn() createdAt: string;
    @CreateDateColumn() updatedAt: string;
    
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    public comparePassword(password: string): Promise<boolean> {
        return bcrypt.compare(password, this.password);
    }

    @BeforeInsert()
    @BeforeUpdate()
    async savePassword(): Promise<void> {
        if(this.password) {
            const hashedPassword = await this.hashPassword(this.password);
            this.password = hashedPassword
        }
    }

    private hashPassword(password: string): Promise<string> {
        return bcrypt.hash(password, BCRYPT_ROUNDS)
    }
}

export default User;