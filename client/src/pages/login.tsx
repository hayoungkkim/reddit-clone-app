import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FormEvent, useState } from "react";
import InputGroup from "../components/InputGroup";

const Register = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState<any>({});

	let router = useRouter();

	const handleSubmit = async (event: FormEvent) => {
		event.preventDefault();
		try {
			// // 백엔드에 회원가입을 위한 요청 및 회원가입 후 로그인 페이지로 자동 이동
			// const res = await axios.post("/auth/register", {
			// 	email,
			// 	password,
			// 	username,
			// });
			// console.log(res);
			// router.push("/login");
		} catch (error: any) {
			// 에러 시 백엔드에서 전해오는 에러 error STATE에 저장
			console.log("error", error);
			setErrors(error.response.data || {});
		}
	};

	return (
		<div className="bg-white">
			<div className="flex flex-col items-center justify-center h-screen p-6">
				<div className="w-10/12 mx-auto md:w-96">
					<h1 className="mb-2 text-lg font-medium">회원가입</h1>
					<form onSubmit={handleSubmit}>
						<InputGroup placeholder="Username" value={username} setValue={setUsername} error={errors.username} />
						<InputGroup placeholder="Password" value={password} setValue={setPassword} error={errors.password} />
						<button className="w-full py-2 mb-1 text-xs font-bold text-white uppercase bg-gray-400 border border-gray-400 rounded">회원 가입</button>
					</form>
					<small>
					아직 아이디가 없나요?
						<Link href="/register" className="ml-1 text-blue-500 uppercase">
						회원가입
						</Link>
					</small>
				</div>
			</div>
		</div>
	);
};

export default Register;
