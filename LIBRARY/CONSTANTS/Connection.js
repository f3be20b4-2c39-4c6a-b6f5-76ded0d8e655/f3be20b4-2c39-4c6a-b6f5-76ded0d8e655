import { BODY } from "./DataBase/Body/Body.js";
import { CREATEDATABASELINK } from "./DataBase/CreateDataBaseLink/CreateDataBaseLink.js";
import { CREATETABLELINK } from "./DataBase/CreateTableLink/CreateTableLink.js";
import { GETDATABASELINK } from "./DataBase/GetDataLink/GetDataLink.js";
import { GETEMAILLINK } from "./DataBase/GetEmailLink/getEmailLink.js";
import { INSERTDATALINK } from "./DataBase/InsertDataLink/InsertDataLink.js";
import { PAYMENTLINK } from "./DataBase/PaymentLink/PaymentLink.js";
import { SENDEMAILLINK } from "./DataBase/SendEmailLink/SendEmailLink.js";
import { UPDATEDATALINK } from "./DataBase/UpdateDataLink/UpdateDataLink.js";

export const CONSTANTSCONNECTIONS=()=>{

const DATA=`const BODY=${BODY};
const CREATEDATABASELINK="${CREATEDATABASELINK}";
const CREATETABLELINK="${CREATETABLELINK}";
const GETDATABASELINK="${GETDATABASELINK}";
const GETEMAILLINK="${GETEMAILLINK}";
const INSERTDATALINK="${INSERTDATALINK}";
const PAYMENTLINK="${PAYMENTLINK}";
const SENDEMAILLINK="${SENDEMAILLINK}";
const UPDATEDATALINK="${UPDATEDATALINK}";
`;

localStorage.setItem("CONSTANTS",DATA);

};

`
const UPDATEDATALINK="${UPDATEDATALINK}";

`