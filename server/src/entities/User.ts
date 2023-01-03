import { Exclude } from "class-transformer";
import { IsEmail, Length } from "class-validator";
import { Entity, Column, Index, OneToMany, BeforeInsert } from "typeorm";
import bcrypt from "bcryptjs";
import BaseEntity from "./Entity";
import Post from "./Post";
import Vote from "./Vote";

@Entity("users")
export default class User extends BaseEntity {
	@Index()
	@IsEmail(undefined, { message: "이메일 주소가 잘못되었습니다." })
	@Length(1, 255, { message: "이메일 주소는 비워둘 수 없습니다." })
	@Column({ unique: true })
	email: string;

	@Index()
	@Length(3, 32, { message: "사용자 이름은 3자 이상이어야 합니다." })
	@Column({ unique: true })
	username: string;

	@Exclude()
	@Column()
	@Length(6, 255, { message: "비밀번호는 6자 이상이어야 합니다." })
	password: string;

	// 관계 형성
	// Post :: 타입지정, post.user :: post 컬럼 안에 엔티티 지정
	// 한 명의 유저가 많은 글을 올릴 수 있고 투표도 할 수 있어서 OneToMany
	@OneToMany(() => Post, (post) => post.user)
	posts: Post[];

	@OneToMany(() => Vote, (vote) => vote.user)
	votes: Vote[];

	@BeforeInsert()
	async hashPassword() {
		this.password = await bcrypt.hash(this.password, 6);
	}
}
