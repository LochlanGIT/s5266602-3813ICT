var fs = require("fs");

module.exports = function(req, res) {
  let valid = false;
  var u = req.body.username;
  console.log(u)

  fs.readFile("./data/users.json", "utf8", function(err, data) {
    let userArray = JSON.parse(data);

    for (let i = 0; i < userArray.length; i++) {
      if (u === userArray[i].username) {
        res.send({"ok": true});
        valid = true;
        console.log("ACCEPTED")
        break;
      }
    }
    if (!valid) {
      console.log("DENIED")
      res.send({"ok":false});
    }

  });
}
