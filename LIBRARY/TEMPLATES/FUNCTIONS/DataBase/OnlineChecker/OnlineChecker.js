export const ONLINECHECKER=(CALLBACK)=>{

    CHECK(navigator.onLine,()=>{

        CALLBACK();

    });

};