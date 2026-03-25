export const AUTORUN=()=>{

    CONDITION(localStorage.getItem("Env") === "Dev",()=>{
        
        import("./index.js").then((module) => {
            if (module.default) {
                module.default();
            } else if (module.CONNECTION) {
                module.CONNECTION();
            };
        });

    },()=>{

        import("./index.js").then((module) => {
            if (module.default) {
                module.default();
            } else if (module.CONNECTION) {
                module.CONNECTION();
            };
        });

    });

};