export const FETCH=(LINK,DATA,CALLBACK)=>{

    ONLINECHECKER(()=>{

        fetch(LINK, {

            method: "POST",

            mode:"cors",

            body: JSON.stringify(DATA)

        })
        .then(response => response.json())

        .then(data => {

            CALLBACK(data);

        })

        .catch(error => {

            console.error("Error:", error);

        });

    });

};