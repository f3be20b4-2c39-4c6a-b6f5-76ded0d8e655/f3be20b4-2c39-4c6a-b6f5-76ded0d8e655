export const TEXTS=(HOLDER,WORD,CALLBACK)=>{

    TEXT(HOLDER,"p",WORD,(ELEMENTS)=>{

        FONTSIZE(ELEMENTS,"18px");

        CALLBACK(ELEMENTS);

    });

};