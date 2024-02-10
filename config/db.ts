import mongoose from "mongoose";
import config from "config";
import Logger from "./logger";

async function connect() {
  const dbUri = config.get<string>("dbUri");

  try {
    await mongoose.connect(dbUri);
    Logger.info("Conectou ao banco de dados");
  } catch (error) {
    Logger.error("Houve um erro ao tentar se conectar ao banco.");
    Logger.error(`Erro: ${error}`);
  }

}

export default connect;