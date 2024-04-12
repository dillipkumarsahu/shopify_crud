import { createServer, Server } from "http";
import app from "./app";

const server: Server = createServer(app);

server.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
