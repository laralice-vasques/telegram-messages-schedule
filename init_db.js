const sqlite = require("sqlite3"); //importando a biblioteca sqlite
const db = new sqlite.Database("./database.sqlite"); //criando a conexão com o banco de dados (classe .database é do sqlite)

//array de strings que são minhas dlls
const ddls = [
    `CREATE TABLE messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        link TEXT NOT NULL
    )`,
        `CREATE TABLE groups (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        id_telegram TEXT UNIQUE NOT NULL,
        name TEXT UNIQUE NOT NULL
    )`,
        `CREATE TABLE groups_messages (
        id_message INTEGER NOT NULL,
        id_group INTEGER NOT NULL,
        FOREIGN KEY(id_message) references messages(id),
        FOREIGN KEY(id_group) references groups(id)
    )`
]

// for que recebe cada ddl como parâmetro e cria a tabela no banco através .run que é do db
ddls.forEach((ddl) =>{
    db.run(ddl)
});