import { DISPLAYBLOCK } from "./DataBase/DisplayBlock/DisplayBlock.js";
import { DISPLAYFLEX } from "./DataBase/DisplayFlex/DisplayFlex.js";
import { DISPLAYINLINEFLEX } from "./DataBase/DisplayInflex/DisplayInflex.js";
import { DISPLAYINLINEBLOCK } from "./DataBase/DisplayInlineBlock/DisplayinlineBlock.js";
import { DISPLAYINLINETABLE } from "./DataBase/DisplayinlineTable/DisplayinlineTable.js";
import { DISPLAYTABLE } from "./DataBase/DisplayTable/Displaytable.js";
import { POSITIONABSOLUTE } from "./DataBase/PositionAbsolute/PositionAbsolute.js";
import { POSITIONFIXED } from "./DataBase/PositionFixed/PositionFixed.js";
import { POSITIONRELATIVE } from "./DataBase/PositionRelative/PositonRelative.js";
import { POSITIONSTICKY } from "./DataBase/PositionSticky/PositionSticky.js";

export const STYLESTEMPLATES=()=>{

const DATA=`const POSITIONFIXED=${POSITIONFIXED};
const POSITIONRELATIVE=${POSITIONRELATIVE};
const POSITIONABSOLUTE=${POSITIONABSOLUTE};
const POSITIONSTICKY=${POSITIONSTICKY};
const DISPLAYFLEX=${DISPLAYFLEX};
const DISPLAYINLINEFLEX=${DISPLAYINLINEFLEX};
const DISPLAYBLOCK=${DISPLAYBLOCK};
const DISPLAYINLINEBLOCK=${DISPLAYINLINEBLOCK};
const DISPLAYTABLE=${DISPLAYTABLE};
const DISPLAYINLINETABLE=${DISPLAYINLINETABLE};
`;
        
localStorage.setItem("STYLESTEMPLATES",DATA);
    
};

`
const DISPLAYINLINETABLE=${DISPLAYINLINETABLE};
`