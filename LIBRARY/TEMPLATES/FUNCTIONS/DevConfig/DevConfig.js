export const DEVCONFIG=(CALLBACK)=>{

    CONDITION(localStorage.getItem("Env") === "Dev",()=>{

        SESSIONSTORE("DevMode","TRUE");

    },()=>{

        CALLBACK();

    });

};