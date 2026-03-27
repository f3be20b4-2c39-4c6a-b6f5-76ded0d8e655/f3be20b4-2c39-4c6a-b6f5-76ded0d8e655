import { CLICKED } from "./DataBase/Clicked/Clicked.js";
import { INPUTTED } from "./DataBase/Inputted/Inputted.js";
import { SCROLLED } from "./DataBase/Scrolled/Scrolled.js";
import { DEVCONFIG } from "./DevConfig/DevConfig.js";
import { ENVCONFIG } from "./EnvConfig/EnvConfig.js";

export const FUNCTIONTEMPLATES=()=>{

const DATA=`const INPUTTED=${INPUTTED};
const CLICKED=${CLICKED};
const SCROLLED=${SCROLLED};
const DEVCONFIG=${DEVCONFIG};
const ENVCONFIG=${ENVCONFIG};
`;
    
localStorage.setItem("FUNCTIONTEMPLATES",DATA);

};

`
const ENVCONFIG=${ENVCONFIG};
`