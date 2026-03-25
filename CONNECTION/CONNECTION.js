import { FUNCTIONCONNECTION } from "../LIBRARY/FUNCTIONS/Connection.js";
import { ERANDIXCONFIG } from "./DataBase/Config/Config.js";
import { SYNC } from "./DataBase/Sync/Sync.js";

export const CONNECTIONS=()=>{

    ERANDIXCONFIG();

    FUNCTIONCONNECTION();

    SYNC();

};