export const TITLE=(HOLDER,WORD,CALLBACK)=>{

    TEXT(HOLDER,"h1",WORD,(ELEMENTS)=>{

        FONTSIZE(ELEMENTS,"25px");

        CALLBACK(ELEMENTS);

    });

};