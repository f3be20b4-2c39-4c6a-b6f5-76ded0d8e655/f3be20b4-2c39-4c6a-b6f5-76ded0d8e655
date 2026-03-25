export const ELEMENTED=(HOLDER,ELEMENT,CALLBACK)=>{

    const ELEMENTS=document.createElement(ELEMENT);

    CALLBACK(ELEMENTS);

    ADD(HOLDER,ELEMENTS);

};