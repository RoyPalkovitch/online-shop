import { server } from "app";

const port = 9000;

server.listen(port, () => {
  console.log(`server started at port:${port}`);
});