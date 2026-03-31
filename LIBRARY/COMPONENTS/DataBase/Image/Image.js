export const IMAGE=(HOLDER,PATH,CALLBACK)=>{

    ELEMENTED(HOLDER,"img",(ELEMENT)=>{

        SOURCED(ELEMENT,PATH);

        CALLBACK(ELEMENT);

    });

};