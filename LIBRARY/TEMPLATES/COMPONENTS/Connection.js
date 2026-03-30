import { MERGER } from "../../../CONNECTION/DataBase/Merger/Merger.js";
import { LEFTTEXT } from "./DataBase/Element/LeftText/LeftText.js";
import { MINITITLE } from "./DataBase/Element/MiniTitle/MiniTitle.js";
import { RIGHTTEXT } from "./DataBase/Element/RightText/RightText.js";
import { SUBTITLE } from "./DataBase/Element/SubTitle/SubTitle.js";
import { TEXTS } from "./DataBase/Element/Texts/Texts.js";
import { TITLE } from "./DataBase/Element/Title/Title.js";
import { FOOTERDIVVIEW } from "./DataBase/Views/FooterDivView/FooterDivView.js";
import { HEADERDIVVIEW } from "./DataBase/Views/HeaderDivView/HeaderDivView.js";

export const COMPONENTSTEMPLATES=()=>{

const DATA=`const LEFTTEXT=${LEFTTEXT};
const RIGHTTEXT=${RIGHTTEXT};
const TITLE=${TITLE};
const SUBTITLE=${SUBTITLE};
const MINITITLE=${MINITITLE};
const TEXTS=${TEXTS};
const HEADERDIVVIEW=${HEADERDIVVIEW};
const FOOTERDIVVIEW=${FOOTERDIVVIEW};
`;

MERGER("COMPONENTTEMPLATES",DATA);
         
};


`
const FOOTERDIVVIEW=${FOOTERDIVVIEW};
`