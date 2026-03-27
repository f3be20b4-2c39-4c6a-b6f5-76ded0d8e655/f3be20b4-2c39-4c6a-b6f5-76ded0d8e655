export const TEXT=(HOLDER,TYPE,WORD,CALLBACK)=>{

    ELEMENTED(HOLDER,TYPE||"p",(ELEMENT)=>{

        MARGIN(ELEMENT,"auto");

        DISPLAYED(ELEMENT,WORD||"Your Text");
        
        CALLBACK(ELEMENT);

    });

};