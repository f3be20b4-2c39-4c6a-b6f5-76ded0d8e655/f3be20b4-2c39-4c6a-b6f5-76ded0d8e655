export const ENVCONFIG=(CALLBACK,CALLBACKONE,CALLBACKTWO)=>{

    CONDITION(localStorage.getItem("Env") === "Dev",()=>{

        SESSIONSTORE("DevMode","TRUE");

    },()=>{

        CONDITION(localStorage.getItem("Env") === "Android",()=>{

            CALLBACKONE();

        },()=>{

            CONDITION(localStorage.getItem("Env") === "Desktop",()=>{

                CALLBACKTWO();

            },()=>{

                CALLBACK();

            });

        });

    });

};