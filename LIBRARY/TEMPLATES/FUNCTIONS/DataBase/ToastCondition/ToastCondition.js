export const TOASTCONDITION=(TERM,MESSAGE,CALLBACK)=>{

    CONDITION(TERM,()=>{

        MESSAGE;

    },()=>{

        CALLBACK();

    });

};