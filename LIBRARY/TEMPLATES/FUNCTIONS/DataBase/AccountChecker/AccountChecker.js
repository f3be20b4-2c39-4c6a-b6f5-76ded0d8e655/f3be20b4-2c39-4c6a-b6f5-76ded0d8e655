export const ACCOUNTCHECKER=(CALLBACK,CALLBACKONE,CALLBACKTWO)=>{

    CONDITION(localStorage.getItem("User"),()=>{

        CALLBACKONE();

    },()=>{

        CONDITION(localStorage.getItem("UserCode"),()=>{

            CALLBACKTWO();

        },()=>{

            CALLBACK();

        });

    });

};