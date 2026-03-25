export const SYNC=()=>{
    if (localStorage.getItem("Env") === "Dev" ) {
        fetch("../../PROJECT/Project.js")
        .then(res =>res.text())
        .then(Data =>{
            if (localStorage.getItem("Packaged")) {
                localStorage.setItem("PROJECT",Data);               
            } else {
                localStorage.setItem("PROJECT",Data);
                localStorage.setItem("Packaged","TRUE");
                setTimeout(() => {
                    location.reload();                   
                }, 1000);
            };
        })
        .catch(error =>{
            console.log(error);
        });
    } else {
        
    };
};