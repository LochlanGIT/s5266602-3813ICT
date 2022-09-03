var fs = require("fs");

module.exports = function(req, res) {
  let valid = false;
  var u = req.body.username;
  var p = req.body.password;

  fs.readFile("./data/users.json", "utf8", function(err, data) {
    let userArray = JSON.parse(data);

    for (let i = 0; i < userArray.length; i++) {
      if (u === userArray[i].username && p === userArray[i].password) {
        res.send({"ok": true});
        valid = true;
        break;
      }
    }
    if (!valid) {
      res.send({"ok":false});
    }

  });
}
