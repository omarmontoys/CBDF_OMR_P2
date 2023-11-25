//Usuario - omarmontoya
//Contraseña - Holamundo1
const mongoose = require("mongoose");
const uriremota =
	"mongodb+srv://omarmontoya:Holamundo1@clusteromr.mlox5ph.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uriremota);
const db = mongoose.connection;
module.exports = mongoose;
