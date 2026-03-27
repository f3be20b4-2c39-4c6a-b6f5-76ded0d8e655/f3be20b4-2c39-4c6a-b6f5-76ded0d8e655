export const ERANDIXCONFIG=()=>{
const DATA=`ROUTEJS(localStorage.getItem("CONSTANTS"));
ROUTEJS(localStorage.getItem("STYLES"));
ROUTEJS(localStorage.getItem("FUNCTIONS"));
ROUTEJS(localStorage.getItem("COMPONENTS"));
ROUTEJS(localStorage.getItem("FUNCTIONTEMPLATES"));
ROUTEJS(localStorage.getItem("COMPONENTTEMPLATES"));
ROUTEJS(localStorage.getItem("AUTOCONFIG"));
ROUTEJS(localStorage.getItem("PROJECT"));
`;
localStorage.setItem("ERANDIXCONFIG",DATA);
};