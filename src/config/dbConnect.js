import mongoose from "mongoose";

mongoose.connect("mongodb+srv://mrcarbonari95:PrJrSBuSszHftgRl@minhabiblioteca.0jfjssj.mongodb.net/Biblioteca", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("Conectado ao Banco de Dados Atlas do MongoDB")).catch((error) => console.log(error))

const db = mongoose.connection;

export default db;