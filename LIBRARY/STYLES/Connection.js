import { BACKGROUND } from "./DataBase/Background/BackGround.js";
import { COLOR } from "./DataBase/Color/Color.js";

export const STYLESCONNECTION=()=>{

const DATA=`const BACKGROUND=${BACKGROUND};
const COLOR=${COLOR};
`;
    
    localStorage.setItem("STYLES",DATA);

};

`
const COLOR=${COLOR};
`