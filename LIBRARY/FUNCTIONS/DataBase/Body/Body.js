export const BODIED=()=>{

    CONDITION(localStorage.getItem("AppColor") === "#000000" ,()=>{

        BACKGROUND(BODY,"#000000");

        COLOR(BODY,"#FFFFFF");

    },()=>{

        BACKGROUND(BODY,"#FFFFFF");

        COLOR(BODY,"#000000");

    });

};