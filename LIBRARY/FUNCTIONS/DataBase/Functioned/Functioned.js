export const FUNCTIONED=(ELEMENT,FUN,CALLBACK)=>{

    ELEMENT.addEventListener(FUN,()=>{CALLBACK(ELEMENT)});

};