export const ERANDIXCONFIG=()=>{

const DATA=`ROUTEJS(localStorage.getItem("CONSTANTS"));
ROUTEJS(localStorage.getItem("FUNCTIONS"));
ROUTEJS(localStorage.getItem("AUTOCONFIG"));
ROUTEJS(localStorage.getItem("PROJECT"));
`;
localStorage.setItem("ERANDIXCONFIG",DATA);

};