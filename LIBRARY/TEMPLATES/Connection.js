import { FUNCTIONTEMPLATES } from "./FUNCTIONS/Connection.js";
import { SERVERTEMPLATES } from "./SERVER/Connection.js";
import { STYLESTEMPLATES } from "./STYLES/Connection.js";

export const TEMPLATESCONNECTION=()=>{

    STYLESTEMPLATES();

    SERVERTEMPLATES();

    FUNCTIONTEMPLATES();

};