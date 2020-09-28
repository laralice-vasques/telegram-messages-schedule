const sqlite3 = require('sqlite3').verbose();

//Função que insere um grupo na tabela groups
function insertGroup(idTelegram, name) {
    //Abrindo a conexão com o DB
    const db = new sqlite3.Database('database.sqlite')


    const sql = "INSERT INTO groups(id_telegram, name) VALUES(?, ?)"
    const callback = (err) => {
        if (err !== null) {
            console.log("Não foi possível inserir: " + err)
        }
    }

    db.run(sql, [idTelegram, name], callback)

    //Fechando a conexão com DB
    db.close()
}
//insertGroup(14, 'grupo4')

//Função que seleciona todos os grupos da tabela groups
function selectAllGroup() {
    //Abrindo a conexão com o DB
    const db = new sqlite3.Database('database.sqlite');

    //SQL que será executada, selecionar todos da tabela groups
    const sql = 'SELECT * FROM groups'

    const callback = (err, rows) => {
        console.log(rows)
    }

    db.all(sql, callback)

    //Fecha a conexão com DB
    db.close()
}
//selectAllGroup()

//Função que seleciona determinado grupo da tabela groups
function selectGroup(id) {
    //Abrindo a conexão com o DB
    const db = new sqlite3.Database('database.sqlite')

    //Criando a SQL a ser usada
    const sql = 'SELECT * FROM groups WHERE id = ?'
    const callback = (err, row) => {
        console.log(row)
    }

    //Busca a linha do id que eu passei
    db.get(sql, id, callback)

    db.close()
}
//selectGroup(2)

//Função que apaga um grupo da tabela groups
function deleteGroup(id) {
    const db = new sqlite3.Database('database.sqlite')

    //Criando a SQL a ser usada
    const sql = 'DELETE FROM groups WHERE id = ?'

    //nesse caso a callback não tem retorno, então será só caso der erro
    const callback = (err) => {
        if (err !== null) {
            console.log('Erro ao deletar o grupo: ' + err)
        }
    }

    db.run(sql, id, callback)

    db.close()
}
//deleteGroup(2)

//Função que atualiza um grupo da tabela
function updateGroup(id, newIdTelegram, newName) {
    const db = new sqlite3.Database('database.sqlite')

    //Criando a SQL a ser usada
    const sql = 'UPDATE groups SET id_telegram = ?, name = ? WHERE id = ?'

    //nesse caso a callback não tem retorno, porque o valor será somente atualizado
    const callback = (err) => {
        if (err !== null) {
            console.log('Erro ao atualizar o grupo: ' + err)
        }
    }

    //Parametro na ordem definida na sql
    db.run(sql, [newIdTelegram, newName, id], callback)

    db.close()
}
//updateGroup(3, 'novoid','atualizado')