export const INPUT=(HOLDER,FORMAT,WORD,NAME,CALLBACK)=>{

    ELEMENTED(HOLDER,"input",(ELEMENT)=>{

        APPMODE(ELEMENT);

        WIDTH(ELEMENT,"90%");

        HEIGHT(ELEMENT,"32px");

        MARGIN(ELEMENT,"2%");

        TYPE(ELEMENT,FORMAT||"text");

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