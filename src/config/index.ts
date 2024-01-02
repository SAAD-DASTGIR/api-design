import merge from "lodash.merge";

process.env.NODE_ENV = process.env.NODE_ENV || "development";
const stage = process.env.NODE_ENV || 'local';

let envConfig 
if(stage==='production'){
    
    envConfig = require('./production').default
}
if(stage==='testing'){
    envConfig = require('./testing').default
}
else{
    envConfig = require('./local').default
}

const defaultConfig = {
    stage,
    dbUrl: process.env.DATABASE_URL,
    jwtSecret: process.env.JWT_SECRET,
    port: process.env.PORT,
    logging: false,
  };
  
  export default merge(defaultConfig, envConfig);