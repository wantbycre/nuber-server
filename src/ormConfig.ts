import { ConnectionOptions } from "typeorm";

const ConnectionOptions: ConnectionOptions = {
    type: "postgres",
    database: "postgres",
    synchronize: true,
    logging: true,
    entities: ["entities/**/*.*"],
    host: process.env.DB_ENDPOINT || "localhost",
    port: 5432,
    username: process.env.DB_USENAME || "postgres",
    password: process.env.DB_PASSWORD || "1230"
};

export default ConnectionOptions;