import { COMPONENTSCONNECTION } from "../LIBRARY/COMPONENTS/Connection.js";
import { CONSTANTSCONNECTIONS } from "../LIBRARY/CONSTANTS/Connection.js";
import { FUNCTIONCONNECTION } from "../LIBRARY/FUNCTIONS/Connection.js";
import { STYLESCONNECTION } from "../LIBRARY/STYLES/Connection.js";
import { TEMPLATESCONNECTION } from "../LIBRARY/TEMPLATES/Connection.js";
import { AUTOCONFIG } from "./DataBase/Auto/Auto.js";
import { ERANDIXCONFIG } from "./DataBase/Config/Config.js";
import { SYNC } from "./DataBase/Sync/Sync.js";

export const CONNECTIONS=()=>{

    ERANDIXCONFIG();

    FUNCTIONCONNECTION();

    SYNC();AUTOCONFIG();

    TEMPLATESCONNECTION();

    CONSTANTSCONNECTIONS();

    STYLESCONNECTION();

    COMPONENTSCONNECTION();

};