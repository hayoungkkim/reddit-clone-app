import express from "express";
import morgan from "morgan";
import { AppDataSource } from "./data-source";

import authRoutes from "./routes/auth";
import subRoutes from "./routes/subs";
import postRoutes from "./routes/posts";
import voteRoutes from "./routes/votes";
import userRoutes from "./routes/users";

import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const origin = process.env.ORIGIN;
app.use(
	cors({
		origin,
		credentials: true,
	})
);
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

app.get("/", (_, res) => res.send("running"));
app.use("/api/auth", authRoutes);
app.use("/api/subs", subRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/votes", voteRoutes);
app.use("/api/users", userRoutes);

// static 파일이 public 폴더 안에 있고 브라우저로 접근할 때 제공 할 수 있게 해줌
app.use(express.static("public"));

let port = 4000;
app.listen(port, async () => {
	console.log(`Server running at ${process.env.APP_URL}`);

	AppDataSource.initialize()
		.then(() => {
			console.log("database initialized");
		})
		.catch((error) => console.log(error));
});
