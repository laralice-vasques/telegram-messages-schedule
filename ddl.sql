CREATE TABLE messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    link TEXT NOT NULL
);

CREATE TABLE groups (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_telegram TEXT UNIQUE NOT NULL,
    name TEXT UNIQUE NOT NULL
);

CREATE TABLE groups_messages (
    id_message INTEGER PRIMARY KEY AUTOINCREMENT,
    id_group INTEGER PRIMARY KEY AUTOINCREMENT,
    FOREIGN KEY(id_message) references messages(id),
    FOREIGN KEY(id_group) references groups(id)
);