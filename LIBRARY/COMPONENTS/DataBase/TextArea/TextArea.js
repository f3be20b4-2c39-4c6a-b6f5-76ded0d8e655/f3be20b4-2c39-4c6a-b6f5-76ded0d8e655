export const TEXTAREA=(HOLDER,WORD,NAME,CALLBACK)=>{

    ELEMENTED(HOLDER,"textarea",(ELEMENT)=>{

        APPMODE(ELEMENT);

        WIDTH(ELEMENT,"90%");

        HEIGHT(ELEMENT,"100px");

        MARGIN(ELEMENT,"2%");

        TYPE(ELEMENT,"text");

        PLACEHOLDER(ELEMENT,WORD||"Your Text");

        INPUTTED(ELEMENT,(ELEMENTS)=>{

            CONDITION(ELEMENTS.length === 0,()=>{

                SESSIONDELETE(NAME);

            },()=>{

                SESSIONSTORE(NAME,ELEMENTS);

            });

        });

        CALLBACK(ELEMENT);

    });

};