import { BACKGROUND } from "./DataBase/Background/BackGround.js";
import { BORDER } from "./DataBase/Border/Border.js";
import { BORDERRADIUS } from "./DataBase/BorderRadius/BoderRadius.js";
import { BOTTOM } from "./DataBase/Bottom/Bottom.js";
import { COLOR } from "./DataBase/Color/Color.js";
import { DISPLAY } from "./DataBase/Display/Display.js";
import { FONTFAMILY } from "./DataBase/FontFamily/FontFamily.js";
import { FONTSIZE } from "./DataBase/FontSize/FontSize.js";
import { HEIGHT } from "./DataBase/Height/Height.js";
import { LEFT } from "./DataBase/Left/Left.js";
import { MARGIN } from "./DataBase/Margin/Margin.js";
import { MARGINBOTTOM } from "./DataBase/MarginBottom/MarginBottom.js";
import { MARGINLEFT } from "./DataBase/MarginLeft/MarginLeft.js";
import { MARGINRIGHT } from "./DataBase/MarginRight/MarginRight.js";
import { MARGINTOP } from "./DataBase/MarginTop/MarginTop.js";
import { PADDING } from "./DataBase/Padding/Padding.js";
import { POSITION } from "./DataBase/Position/Position.js";
import { RIGHT } from "./DataBase/Right/Right.js";
import { TOP } from "./DataBase/Top/Top.js";
import { WIDTH } from "./DataBase/Width/Width.js";

export const STYLESCONNECTION=()=>{

const DATA=`const BACKGROUND=${BACKGROUND};
const COLOR=${COLOR};
const FONTSIZE=${FONTSIZE};
const FONTFAMILY=${FONTFAMILY};
const PADDING=${PADDING};
const MARGIN=${MARGIN};
const WIDTH=${WIDTH};
const HEIGHT=${HEIGHT};
const POSITION=${POSITION};
const DISPLAY=${DISPLAY};
const TOP=${TOP};
const BOTTOM=${BOTTOM};
const RIGHT=${RIGHT};
const LEFT=${LEFT};
const BORDERRADIUS=${BORDERRADIUS};
const BORDER=${BORDER};
const MARGINLEFT=${MARGINLEFT};
const MARGINRIGHT=${MARGINRIGHT};
const MARGINTOP=${MARGINTOP};
const MARGINBOTTOM=${MARGINBOTTOM};
`;
    
localStorage.setItem("STYLES",DATA);

};

`
const MARGINBOTTOM=${MARGINBOTTOM};
`