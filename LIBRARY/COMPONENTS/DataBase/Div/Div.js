export const DIV=(HOLDER,CALLBACK)=>{

    ELEMENTED(HOLDER,"div",(ELEMENT)=>{

        POSITION(ELEMENT,"relative");

        BACKGROUND(ELEMENT,"#cdcdcd50");

        WIDTH(ELEMENT,"100%");

        HEIGHT(ELEMENT,"100%");
        
        CALLBACK(ELEMENT);

    });

};