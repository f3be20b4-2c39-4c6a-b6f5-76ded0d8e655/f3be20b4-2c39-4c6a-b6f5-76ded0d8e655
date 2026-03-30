export const SUBTITLE=(HOLDER,WORD,CALLBACK)=>{

    TEXT(HOLDER,"h3",WORD,(ELEMENTS)=>{

        FONTSIZE(ELEMENTS,"22px");

        CALLBACK(ELEMENTS);

    });

};