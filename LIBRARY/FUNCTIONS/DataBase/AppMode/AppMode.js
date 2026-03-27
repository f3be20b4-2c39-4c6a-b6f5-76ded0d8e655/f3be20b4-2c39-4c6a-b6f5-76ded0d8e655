export const APPMODE=(HOLDER)=>{

    CONDITION(localStorage.getItem("AppColor") === "#000000" ,()=>{

        BACKGROUND(HOLDER,"#000000");

        COLOR(HOLDER,"#FFFFFF");

    },()=>{

        BACKGROUND(HOLDER,"#FFFFFF");

        COLOR(HOLDER,"#000000");

    });

};