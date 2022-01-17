import Server from "./classes/server";
import router from "./routes/router";
import bodyParser from "body-parser";
import cors from "cors";


const server = new Server();

// parseo de la resppuesta del body
server.app.use(bodyParser.urlencoded({ extended: true })); // nuevo middleware
server.app.use(bodyParser.json()); // nuevo middleware

// cors

server.app.use(cors({ origin: true, credentials: true })); //

server.app.use('/', router)

server.start( () => { console.log(`Server running on port ${server.port}`) } );