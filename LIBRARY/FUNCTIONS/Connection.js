import { ADD } from "./DataBase/Add/Add.js";
import { DISPLAY } from "./DataBase/Display/Display.js";

export const FUNCTIONCONNECTION =()=> {

const DATA=`const ADD=${ADD};
const DISPLAY=${DISPLAY};
`;

localStorage.setItem("FUNCTIONS",DATA.replace(/\s+/g, ""));

};

`
const ADD=${ADD};
`