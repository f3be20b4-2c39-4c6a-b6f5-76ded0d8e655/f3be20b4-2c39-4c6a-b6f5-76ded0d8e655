import { DIV } from "./DataBase/Div/Div.js";
import { FOOTER } from "./DataBase/Footer/Footer.js";
import { HEADER } from "./DataBase/Header/Header.js";
import { INPUT } from "./DataBase/Input/Input.js";
import { TEXT } from "./DataBase/Text/Text.js";

export const COMPONENTSCONNECTION=()=>{

const DATA=`const TEXT=${TEXT};
const DIV=${DIV};
const FOOTER=${FOOTER};
const HEADER=${HEADER};
const INPUT=${INPUT};
`;

localStorage.setItem("COMPONENTS",DATA);

};

`
const INPUT=${INPUT};
`