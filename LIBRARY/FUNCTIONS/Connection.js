import { ADD } from "./DataBase/Add/Add.js";
import { AUTORUN } from "./DataBase/AutoRun/AutoRun.js";
import { BODIED } from "./DataBase/Body/Body.js";
import { CONDITION } from "./DataBase/Condition/Conditon.js";
import { DISPLAY } from "./DataBase/Display/Display.js";

export const FUNCTIONCONNECTION =()=> {

const DATA=`const ADD=${ADD};
const AUTORUN=${AUTORUN};
const BODIED=${BODIED};
const CONDITION=${CONDITION};
const DISPLAY=${DISPLAY};

`;

localStorage.setItem("FUNCTIONS",DATA);

};

`
const BODIED=${BODIED};
`