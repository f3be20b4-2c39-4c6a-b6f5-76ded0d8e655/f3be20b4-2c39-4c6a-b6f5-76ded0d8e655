import { MERGER } from "../../CONNECTION/DataBase/Merger/Merger.js";
import { ADD } from "./DataBase/Add/Add.js";
import { APPMODE } from "./DataBase/AppMode/AppMode.js";
import { AUTORUN } from "./DataBase/AutoRun/AutoRun.js";
import { BODIED } from "./DataBase/Body/Body.js";
import { CHECK } from "./DataBase/Check/Check.js";
import { CONDITION } from "./DataBase/Condition/Conditon.js";
import { DISPLAYED } from "./DataBase/Display/Display.js";
import { ELEMENTED } from "./DataBase/Elemented/Elemented.js";
import { FETCH } from "./DataBase/Fetch/Fetch.js";
import { FUNCTIONED } from "./DataBase/Functioned/Functioned.js";
import { LOCALDELETE } from "./DataBase/LocalDelete/LocalDelete.js";
import { LOCALSTORE } from "./DataBase/LocalStore/LocalStore.js";
import { PLACEHOLDER } from "./DataBase/PlaceHolder/PlaceHolder.js";
import { REDUX } from "./DataBase/Redux/Redux.js";
import { ROUTE } from "./DataBase/Route/Route.js";
import { SESSIONDELETE } from "./DataBase/SessionDelete/SessionDelete.js";
import { SESSIONSTORE } from "./DataBase/SessionStore/SessionStore.js";
import { SOURCED } from "./DataBase/Sourced/Sourced.js";
import { STYLED } from "./DataBase/Styled/Styled.js";
import { TYPE } from "./DataBase/Type/Type.js";
import { WEBKIT } from "./DataBase/WebKit/WebKit.js";
import { ZOOM } from "./DataBase/Zoom/Zoom.js";

export const FUNCTIONCONNECTION =()=>{

const DATA=`const ADD=${ADD};
const AUTORUN=${AUTORUN};
const BODIED=${BODIED};
const CONDITION=${CONDITION};
const DISPLAYED=${DISPLAYED};
const ELEMENTED=${ELEMENTED};
const STYLED=${STYLED};
const TYPE=${TYPE};
const PLACEHOLDER=${PLACEHOLDER};
const APPMODE=${APPMODE};
const LOCALSTORE=${LOCALSTORE};
const SESSIONSTORE=${SESSIONSTORE};
const FUNCTIONED=${FUNCTIONED};
const LOCALDELETE=${LOCALDELETE};
const SESSIONDELETE=${SESSIONDELETE};
const WEBKIT=${WEBKIT};
const ZOOM=${ZOOM};
const ROUTE=${ROUTE};
const FETCH=${FETCH};
const CHECK=${CHECK};
const SOURCED=${SOURCED};
const REDUX=${REDUX};
`;

MERGER("FUNCTIONS",DATA);

};

`
const REDUX=${REDUX};
`