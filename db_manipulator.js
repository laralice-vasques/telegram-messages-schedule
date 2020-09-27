var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');
 
db.serialize(function() {
  db.run("CREATE TABLE lorem (info TEXT, info2 TEXT)");
 
  var stmt = db.prepare("INSERT INTO lorem(info,info2) VALUES (?, ?)");
  for (var i = 0; i < 10; i++) {
      stmt.run("Ipsum " + i, "Ip2 " + i);
  }
  stmt.finalize();
 
  db.each("SELECT * FROM lorem", function(err, row) {
      //console.log(row.id + ": " + row.info);
      console.log(row.info)
  });
});

const row = {
    info: "info1",
    info2: "info2",

}
 
db.close();