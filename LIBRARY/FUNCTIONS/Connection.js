import { ADD } from "./DataBase/Add/Add.js";
import { AUTORUN } from "./DataBase/AutoRun/AutoRun.js";
import { CONDITION } from "./DataBase/Condition/Conditon.js";
import { DISPLAY } from "./DataBase/Display/Display.js";

export const FUNCTIONCONNECTION =()=> {

const DATA=`const ADD=${ADD};
const AUTORUN=${AUTORUN};
const CONDITION=${CONDITION};
const DISPLAY=${DISPLAY};

`;

localStorage.setItem("FUNCTIONS",DATA);

};

`
const CONDITION=${CONDITION};
`