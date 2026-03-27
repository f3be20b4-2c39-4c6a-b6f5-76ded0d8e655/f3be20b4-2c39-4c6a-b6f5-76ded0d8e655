import { LEFTTEXT } from "./DataBase/Element/LeftText/LeftText.js";
import { RIGHTTEXT } from "./DataBase/Element/RightText/RightText.js";

export const COMPONENTSTEMPLATES=()=>{

const DATA=`const LEFTTEXT=${LEFTTEXT};
const RIGHTTEXT=${RIGHTTEXT};
`;
        
localStorage.setItem("COMPONENTTEMPLATES",DATA);
    
};


`
const RIGHTTEXT=${RIGHTTEXT};
`