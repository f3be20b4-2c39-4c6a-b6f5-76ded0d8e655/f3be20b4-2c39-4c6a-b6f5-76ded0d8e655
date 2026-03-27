export const HEADER=(HOLDER,CALLBACK)=>{

    ELEMENTED(HOLDER,"header",(ELEMENT)=>{

        POSITION(ELEMENT,"absolute");
        BACKGROUND(ELEMENT,"#cdcdcd50");
        WIDTH(ELEMENT,"100%");
        HEIGHT(ELEMENT,"50px");
        DISPLAY(ELEMENT,"inline-flex");
        LEFT(ELEMENT,"0");
        TOP(ELEMENT,"0");
        MARGIN(ELEMENT,"auto");
  
        CALLBACK(ELEMENT);

    });

};