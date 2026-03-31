export const MERGER=(NAME,DATA)=>{

    if (localStorage.getItem("Env") === "Dev" ) {
        
        sessionStorage.setItem("DevMode","TRUE");

        localStorage.setItem(NAME,DATA);
        
    }else{

        localStorage.setItem(NAME,DATA);

    };

};