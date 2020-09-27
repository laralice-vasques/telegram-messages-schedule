// Importando a biblioteca sqlite3
const sqlite3 = require('sqlite3').verbose();

// Pega todas as mensagens do DB
function getMessages() {
    // Cria a conexão com o DB
    const db = new sqlite3.Database('database.sqlite');
    
    // SQL que será executada
    const sql = "SELECT * FROM messages"

    // Função responsável de lidar com o resultado da query
    const callback = (err, rows) => {
        console.log(rows)
    } 
    

    // Executa a query e passa os resultados para função callback
    db.all(sql, callback)

    // Fecha a conexão com o DB
    db.close()
}


function findMessage(id) {
    const db = new sqlite3.Database('database.sqlite');

    const sql = "SELECT * FROM messages WHERE id = ?"
    const callback = (err, row) => {
        console.log(row)
    }
    
    // Quando estiver buscando apenas uma linha, usar o método get.
    db.get(sql, id, callback)

    db.close()
}

function  insertMessage(link) {
    const db = new sqlite3.Database('database.sqlite')
    
    const sql = "INSERT INTO messages(link) VALUES(?)"
    const callback = (err) => {
        if (err !== null) {
            console.log("Ocorreu um erro ao inserir: " + err)
        }
    }

    db.run(sql, link, callback)

    db.close()
}


function deleteMessage(id) {
    const db = new sqlite3.Database('database.sqlite')
    
    const sql = "DELETE FROM messages WHERE id = ?" 
    const callback = (err) => {
        if (err !== null) {
            console.log("Erro ao deletar: " + err)
        }
    }

    db.run(sql, id, callback)

    db.close()
}
