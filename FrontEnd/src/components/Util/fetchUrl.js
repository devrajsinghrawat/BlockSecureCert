const REACT_APP_BE_LOCAL = "http://localhost:5001";
const REACT_APP_BE_STG = "http://206.189.149.207:4001"; // staging
const REACT_APP_BE_PRD = "http://206.189.149.207:3001";

//  export const REACT_APP_PORTRUNBUILD_STG = 5004;  // Staging UI port for build 
//  export const REACT_APP_PORTRUNBUILD_PRD = 3004;   // Producation UI port for build 

const REACT_APP_PORT_FE_DEV = 4000;  // Staging UI port for npm start
const REACT_APP_PORT_FE_PRD = 3000;   // Producation UI port for npm start


const fetchBackendUrl = () => {
 console.log("I m in FetchURL.js");
console.log("Node_ENV -->",process.env.NODE_ENV);
 console.log("Check the env file values - REACT_APP_ENVIRONMENT --", process.env.REACT_APP_ENVIRONMENT);
 console.log("Check the env file values - BE_STG --", process.env.REACT_APP_BE_STG);
 console.log("Check the env file values - BE_PRD --", process.env.REACT_APP_BE_PRD);
 console.log("Check the env file values - BE_LOCAL --", process.env.REACT_APP_BE_LOCAL);
 
 var backendUrl;
 
 if ((window.origin).includes("localhost")) {
   backendUrl = process.env.REACT_APP_BE_LOCAL || REACT_APP_BE_LOCAL;
 
 } else {
   backendUrl = (window.origin).includes("dev-ats")
       ? process.env.REACT_APP_BE_STG || REACT_APP_BE_STG
       : process.env.REACT_APP_BE_PRD || REACT_APP_BE_PRD;
 }
 console.log("Generated backendUrl --", backendUrl);

 return backendUrl;
}

export var backendUrl = fetchBackendUrl();


