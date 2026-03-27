export const DISPLAYED=(ELEMENT,DATA)=>{

    CONDITION(ELEMENT,()=>{
      
        ELEMENT.innerHTML=DATA;

    },()=>{

        BODY.innerHTML=DATA;

    });

};