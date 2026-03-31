import { MERGER } from "../../CONNECTION/DataBase/Merger/Merger.js";
import { DIV } from "./DataBase/Div/Div.js";
import { FOOTER } from "./DataBase/Footer/Footer.js";
import { HEADER } from "./DataBase/Header/Header.js";
import { IMAGE } from "./DataBase/Image/Image.js";
import { INPUT } from "./DataBase/Input/Input.js";
import { LINE } from "./DataBase/Line/Line.js";
import { TEXT } from "./DataBase/Text/Text.js";
import { TEXTAREA } from "./DataBase/TextArea/TextArea.js";

export const COMPONENTSCONNECTION=()=>{

const DATA=`const TEXT=${TEXT};
const DIV=${DIV};
const FOOTER=${FOOTER};
const HEADER=${HEADER};
const INPUT=${INPUT};
const IMAGE=${IMAGE};
const LINE=${LINE};
const TEXTAREA=${TEXTAREA};
`;

MERGER("COMPONENTS",DATA);

};

`
const TEXTAREA=${TEXTAREA};
`