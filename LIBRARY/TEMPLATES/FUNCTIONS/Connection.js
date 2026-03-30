import { CLICKED } from "./DataBase/Clicked/Clicked.js";
import { INPUTTED } from "./DataBase/Inputted/Inputted.js";
import { SCROLLED } from "./DataBase/Scrolled/Scrolled.js";
import { DEVCONFIG } from "./DataBase/DevConfig/DevConfig.js";
import { ENVCONFIG } from "./DataBase/EnvConfig/EnvConfig.js";
import { CLEAR } from "./DataBase/Clear/Clear.js";
import { ONLINECHECKER } from "./DataBase/OnlineChecker/OnlineChecker.js";
import { TOASTCONDITION } from "./DataBase/ToastCondition/ToastCondition.js";
import { ACCOUNTCHECKER } from "./DataBase/AccountChecker/AccountChecker.js";

export const FUNCTIONTEMPLATES=()=>{

const DATA=`const INPUTTED=${INPUTTED};
const CLICKED=${CLICKED};
const SCROLLED=${SCROLLED};
const DEVCONFIG=${DEVCONFIG};
const ENVCONFIG=${ENVCONFIG};
const CLEAR=${CLEAR};
const ONLINECHECKER=${ONLINECHECKER};
const TOASTCONDITION=${TOASTCONDITION};
const ACCOUNTCHECKER=${ACCOUNTCHECKER};
`;
    
localStorage.setItem("FUNCTIONTEMPLATES",DATA);

};

`
const ACCOUNTCHECKER=${ACCOUNTCHECKER};
`