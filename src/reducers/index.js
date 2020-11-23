import menuReducer from "./menu";
import navbarReducer from "./navbar";


const { combineReducers } = require("redux");
const { default: productReducer } = require("./product");

const rootReducer = combineReducers({
    products:  productReducer,
    navbar : navbarReducer,
    menu: menuReducer
})

export default rootReducer